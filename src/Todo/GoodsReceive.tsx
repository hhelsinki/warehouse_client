import { useSelector } from "react-redux";
import Form from "./Form";
import ProductList from "./ProductList";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
//import {items} from "../store/reducers";
import '../css/global.css';
import '../css/home.scss';
import Header from "../part/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Warning from "../common/Warning";

interface APIerr {
    active: boolean, txt: string, txtColor: string
}

function GoodsReceive() {
    const items = useSelector((state: any) => state.items);
    const [historyPath, setHistoryPath] = useState<string>('');
    const [seller, setSeller] = useState({
        id: '', name: ''
    });
    const [doc, setDoc] = useState({
        code: 'R01', type: 'ซื้อสินค้า', no: '', date: '', ref: '', ref_date: ''
    });
    const [recorder, setRecorder] = useState({
        code: 'EMP-00001', name: 'กัญญา เป็นสุข'
    });
    const [DO, setDO] = useState({
        no: '', dep_code: '004-PU', dep_title: 'แผนกจัดซื้อ', receiver_code: 'EMP-00002', receiver_name: 'สมชาย มานะ'
    });
    const [remark, setRemark] = useState({
        i: '', ii: ''
    });
    const [isApiErr, setApiErr] = useState<APIerr>({
        active: false, txt: '', txtColor: 'col-green text-center'
    });


    const handleSeller = (e: ChangeEvent<HTMLSelectElement>) => {
        switch (e.target.value) {
            case 'VEN-00006':
                setSeller({ id: 'VEN-00006', name: 'Green staionary' });
                break;
            case 'VEN-00007':
                setSeller({ id: 'VEN-00007', name: 'B2S' });
                break;
            default:
                break;
        }
    }
    const handleDocDate = () => {
        const date = new Date();
        setDoc({ ...doc, date: date.toLocaleDateString('th-TH') });
    }

    const handleSubmit = async () => {
        let newTotal = items;
        const totalAmount = newTotal.reduce((prev: number, { amount }: { amount: number }) => {
            return prev + (amount * 1);
        }, 0);
        const totalPrice = newTotal.reduce((prev: number, { price_total }: { price_total: number }) => {
            return prev + price_total;
        }, 0);

        const data = {
            seller_id: seller.id,
            seller_name: seller.name,
            doc_code: doc.code,
            doc_type: doc.type,
            doc_no: doc.no,
            doc_date: doc.date,
            doc_ref: doc.ref,
            doc_ref__date: doc.ref_date,
            recorder_code: recorder.code,
            recorder_name: recorder.name,
            do_no: DO.no,
            do_department__code: DO.dep_code,
            do_department__title: DO.dep_title,
            do_receiver__code: DO.receiver_code,
            do_receiver__name: DO.receiver_name,
            remark__i: remark.i,
            remark__ii: remark.ii,
            dataArray: items,
            total_amount: totalAmount,
            total_price: totalPrice
        }
        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API}/goods-receive`,
            data: data
        }
        //console.log(data)

        if (seller.id !== '' && doc.no !== '' && doc.date !== '') {
            try {
                const res = await axios(config);
                console.log(res.data)
                switch (res.data.status) {
                    case true:
                        setApiErr({ ...isApiErr, active: true, txt: res.data.msg });
                        setTimeout(() => { setApiErr({ ...isApiErr, active: false }); window.location.reload(); }, 5000);
                        return;
                    case false: default:
                        setApiErr({ active: true, txt: res.data.msg, txtColor: 'col-red text-center' });
                        setTimeout(() => { setApiErr({ ...isApiErr, active: false }) }, 5000);
                        return;
                }
            }
            catch (err) {
                console.log('err API: /goods-receive');
            }
        } else {
            setApiErr({ active: true, txt: '*รหัสผู้ซื้อ *เลขที่เอกสาร *วันที่เอกสาร ห้ามมีค่าว่าง', txtColor: 'col-red text-center' });
            setTimeout(() => { setApiErr({ ...isApiErr, active: false }) }, 5000);
        }


    }


    //console.log(items);
    useEffect(() => {
        handleDocDate();

        let currentPath: string = window.location.pathname;
        if (currentPath === '/goods-receive') {
            setHistoryPath('../history/history-gr');
            return;
        }
        if (currentPath === '/issue-stock') {
            setHistoryPath('../history/history-is');
            return;
        }
    }, []);

    return (
        <div className="width-l m-auto p-df">
            <Header />
            <main>
                <article data-name='goods receive' className="gr__headline">
                    <h1 className="text-center">รับสินค้า</h1>
                    <form onSubmit={(e) => e.preventDefault} >
                        <div className="gr__credential-i">
                            <div className="rounded-lg">
                                <label className="width-two inline-block">รหัสผู้ซื้อ<i className="col-red">&#42;</i></label>
                                <select name='seller id' onChange={handleSeller} required>
                                    <option value=''>กรุณาเลือก</option>
                                    <option value='VEN-00006'>VEN-00006</option>
                                    <option value='VEN-00007'>VEN-00007</option>
                                </select>
                                <input type="text" value={seller.name} className="width-four m-1-5" readOnly />
                                <br />
                                <label className="width-two inline-block">รายการเอกสาร</label>
                                <select name='doc list' required>
                                    <option value='R01'>R01</option>
                                </select>
                                <input type="text" value={doc.type} className="width-four m-1-5" readOnly />
                                <br />
                                <label className="width-two inline-block">เลขที่เอกสาร<i className="col-red">&#42;</i></label>
                                <input type='text' onChange={(e) => setDoc({ ...doc, no: e.target.value })} placeholder="GR5206-00003" className="width-two-four" required />
                                <label className="inline-block width-one-nine m-1-5">วันที่เอกสาร<i className="col-red">&#42;</i></label>
                                <input type="text" value={doc.date} className="width-two" placeholder="date/month/year" maxLength={10} readOnly />
                                <br />
                                <label className="width-two inline-block">เลขที่เอกสารอ้างอิง</label>
                                <input type='text' onChange={(e) => setDoc({ ...doc, ref: e.target.value })} className="width-two-four" />
                                <label className="inline-block width-one-nine m-1-5">วันที่เอกสารอ้างอิง</label>
                                <input type="text" onChange={(e) => setDoc({ ...doc, ref_date: e.target.value })} placeholder="date/month/year" className="width-two" />
                                <br />
                                <label className="width-two inline-block">ผู้บันทึก</label>
                                <select name="recorder" required>
                                    <option value={recorder.code}>EMP-00001</option>
                                </select>
                                <input type="text" value={recorder.name} className="width-four m-1-5" readOnly />
                            </div>

                            <div className="rounded-lg width-eight">
                                <div className="width-five text-center">Goods Receive</div>
                                <br />
                                <label className="inline-block width-two-five m-1-5">เลขที่ใบ DO</label>
                                <input type='text' onChange={(e) => setDO({ ...DO, no: e.target.value })} className="width-two-four" />
                                <br />
                                <label className="inline-block width-two-five m-1-5">แผนก</label>
                                <select name='department' required>
                                    <option value={DO.dep_code}>004-PU</option>
                                </select>
                                <input type="text" value={DO.dep_title} className="width-four ml-1-5" readOnly />
                                <br />
                                <label className="inline-block width-two-five m-1-5">ผู้รับสินค้า</label>
                                <select name='receiver' required>
                                    <option value={DO.receiver_code}>EMP-00002</option>
                                </select>
                                <input type="text" value={DO.receiver_name} className="width-four ml-1-5" readOnly />

                            </div>
                        </div>

                        <div className="flex mt-1-5">
                            <div className="width-one">
                                <label>หมายเหตุ</label>
                            </div>
                            <div className="width-eigth">
                                <input type="text" onChange={(e) => setRemark({ ...remark, i: e.target.value })} className="width-nine float-right" />
                                <br />
                                <input type="text" onChange={(e) => setRemark({ ...remark, ii: e.target.value })} className="width-nine float-right mt-1-5" />
                            </div>
                        </div>


                    </form>
                </article>
                <article data-name='goods receive insert' className="gr__content flex">
                    <ProductList />
                    <Form />
                </article>
                <article data-name='submit' className="footer">
                    <Link to={historyPath}><button type="button">ประวัติ</button></Link>
                    <button type="button" onClick={() => window.location.reload()} className="butt-del col-white">X Discard</button>
                    <button type="button" onClick={handleSubmit} className="butt-green">Save</button>
                </article>

                {/*modal warning */}
                {isApiErr.active && (<Warning txt={isApiErr.txt} col={isApiErr.txtColor} />)}
            </main>

        </div>
    );
}

export default GoodsReceive;