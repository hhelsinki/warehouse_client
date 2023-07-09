import { useSelector } from "react-redux";
import FormIS from "./FormIS";
import ProductListIS from "./ProductListIS";
import { ChangeEvent, useEffect, useState } from "react";
//import {items} from "../store/reducers";
import '../css/global.css';
import '../css/home.scss';
import Header from "../part/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Warning from "../common/Warning";

interface APIerr {
    active: boolean, txt: string, txtColor:string
}

function IssueStock() {
    const items__is = useSelector((state: any) => state.items__is);
    const [historyPath, setHistoryPath] = useState<string>('');
    const [buyer, setBuyer] = useState({
        id: '', name: ''
    });
    const [doc, setDoc] = useState({
        code: 'S01', type: 'เบิกขาย', no: '', date: '', ref: '', ref_date: ''
    });
    const [recorder, setRecorder] = useState({
        code: 'EMP-00001', name: 'กัญญา เป็นสุข'
    });
    const [DP, setDP] = useState({
        no: '', dep_code: '003-SL', dep_title: 'แผนกขายสินค้า', receiver_code: 'EMP-00003', receiver_name: 'พรรณี ภูชัย'
    });
    const [remark, setRemark] = useState({
        i: '', ii: ''
    });
    const [isApiErr, setApiErr] = useState<APIerr>({
        active: false, txt: '', txtColor: 'col-green text-center'
    })


    const handleSeller = (e: ChangeEvent<HTMLSelectElement>) => {
        //console.log(e.target.value)
        switch (e.target.value) {
            case 'CUS-00001':
                setBuyer({ id: 'CUS-00001', name: 'The Mall Group' });
                break;
            case 'CUS-00002':
                setBuyer({ id: 'CUS-00002', name: 'JJ Mall' });
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
        let newTotal = items__is;
        const totalAmount = newTotal.reduce((prev: number, { amount__is }: { amount__is: number }) => {
            return prev + (amount__is * 1);
        }, 0);
        const totalPrice = newTotal.reduce((prev: number, { price_total__is }: { price_total__is: number }) => {
            return prev + price_total__is;
        }, 0)

        const data = {
            buyer_id: buyer.id,
            buyer_name: buyer.name,
            doc_code: doc.code,
            doc_type: doc.type,
            doc_no: doc.no,
            doc_date: doc.date,
            doc_ref: doc.ref,
            doc_ref__date: doc.ref_date,
            recorder_code: recorder.code,
            recorder_name: recorder.name,
            dp_no: DP.no,
            dp_department__code: DP.dep_code,
            dp_department__title: DP.dep_title,
            dp_receiver__code: DP.receiver_code,
            dp_receiver__name: DP.receiver_name,
            remark__i: remark.i,
            remark__ii: remark.ii,
            dataArray: items__is,
            total_amount: totalAmount,
            total_price: totalPrice
        }
        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API}/issue-stock`,
            data: data
        }
        //console.log(data)

        if (buyer.id !== '' && doc.no !== '' && doc.date !== '') {
            try {
                const res = await axios(config);
                switch (res.data.status) {
                    case true:
                        setApiErr({...isApiErr, active:true, txt: res.data.msg });
                        setTimeout(()=>{setApiErr({...isApiErr, active:false })}, 5000);
                        return window.location.reload();
                    case false: default:
                        setApiErr({active:true, txt: res.data.msg, txtColor: 'col-red text-center' });
                        setTimeout(()=>{setApiErr({...isApiErr, active:false })}, 5000);
                        return;
                }
            }
            catch (err) {
                console.log('err API: /issue-stock')
            }
        } else {
            setApiErr({ active: true, txt: '*รหัสลูกค้า *เลขที่เอกสาร *วันที่เอกสาร ห้ามมีค่าว่าง', txtColor: 'col-red text-center' });
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
            <article data-name='issue stock' className="gr__headline">
                <h1 className="text-center">จ่ายสินค้า</h1>
                <form onSubmit={(e) => e.preventDefault} >
                    <div className="gr__credential-i">
                        <div className="rounded-lg">
                            <label className="width-two inline-block">รหัสลูกค้า<i className="col-red">&#42;</i></label>
                            <select name='buyer id' onChange={handleSeller} required>
                                <option value=''>กรุณาเลือก</option>
                                <option value='CUS-00001'>CUS-00001</option>
                                <option value='CUS-00002'>CUS-00002</option>
                            </select>
                            <input type="text" value={buyer.name} className="width-four m-1-5" readOnly />
                            <br />
                            <label className="width-two inline-block">รายการเอกสาร</label>
                            <select name='doc list' required>
                                <option value='S01'>S01</option>
                            </select>
                            <input type="text" value={doc.type} className="width-four m-1-5" readOnly />
                            <br />
                            <label className="width-two inline-block">เลขที่เอกสาร<i className="col-red">&#42;</i></label>
                            <input type='text' onChange={(e) => setDoc({ ...doc, no: e.target.value })} placeholder="IS5206-00003" className="width-two-four" required />
                            <label className="inline-block width-one-nine m-1-5">วันที่เอกสาร<i className="col-red">&#42;</i></label>
                            <input type="text" value={doc.date} className="width-two" readOnly />
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

                        <div className="rounded-lg">
                            <div className="width-five text-center">Issue Stock</div>
                            <br />
                            <label className="inline-block width-two-five m-1-5">เลขที่ใบ DP</label>
                            <input type='text' onChange={(e) => setDP({ ...DP, no: e.target.value })} className="width-two-four" />
                            <br />
                            <label className="inline-block width-two-five m-1-5">แผนก</label>
                            <select name='department' required>
                                <option value={DP.dep_code}>003-SL</option>
                            </select>
                            <input type="text" value={DP.dep_title} className="width-four ml-1-5" readOnly />
                            <br />
                            <label className="inline-block width-two-five m-1-5">ผู้ส่งสินค้า</label>
                            <select name='receiver' required>
                                <option value={DP.receiver_code}>EMP-00003</option>
                            </select>
                            <input type="text" value={DP.receiver_name} className="width-four ml-1-5" readOnly />

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
            <article data-name='issue stock insert' className="gr__content flex">
                <ProductListIS />
                <FormIS />
            </article>
            <article data-name='submit' className="footer">
                <Link to={historyPath}><button type="button">ประวัติ</button></Link>
                <button type="button" onClick={() => window.location.reload()} className="butt-del col-white">X Discard</button>
                <button type="button" onClick={handleSubmit} className="butt-green">Save</button>
            </article>

            {/*modal warning */}
            {isApiErr.active && (<Warning txt={isApiErr.txt} col={isApiErr.txtColor} />)}
        </div>
    );
}

export default IssueStock;