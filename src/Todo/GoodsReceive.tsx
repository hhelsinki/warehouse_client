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
        code: 'EMP-00001', name: 'Kanya Pasook'
    });
    const [DO, setDO] = useState({
        no: '', dep_code: '004-PU', dep_title: 'แผนกจัดซื้อ', receiver_code: 'EMP-00002', receiver_name: 'Somchai Mana'
    });
    const [remark, setRemark] = useState({
        i: '', ii: ''
    });


    const handleSeller = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
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
    const handleDocDate = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 2 || e.target.value.length === 5) {
            e.target.value += '/';
            return;
        }
        setDoc({ ...doc, date: e.target.value });
    }

    const handleSubmit = () => {
        const data = {
            "seller_id": "VEN-00008",
            "seller_name": "MK",
            "doc_code": "R02",
            "doc_type": "ซื้อสินต้า",
            "doc_no": "RS5201-00002",
            "doc_date": "09/06/2566",
            "doc_ref": "",
            "doc_ref__date": "",
            "recorder_code": "EMP-00001",
            "recorder_name": "สมหญิง เป็นสุข",
            "do_no": "",
            "do_department__code": "004-PU",
            "do_department__title": "แผนกจัดซื้อ",
            "do_receiver__code": "EMP-00002",
            "do_receiver__name": "กัญญา มาดี",
            "remark__i": "",
            "remark__ii": "",
            dataArray: [],
            total_amount:,
            total_price:

        }
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/goods-receive`,
            data: data
        }

        axios(config)
            .then((res) => {

            })
            .catch((err) => {
                console.log('err API: /goods-receive')
            })
    }

    console.log(seller)

    //console.log(items);
    useEffect(() => {
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
                                <label className="width-two inline-block">รหัสผู้ซื้อ</label>
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
                                <label className="width-two inline-block">เลขที่เอกสาร</label>
                                <input type='text' onChange={(e) => setDoc({ ...doc, no: e.target.value })} placeholder="RS5206-00003" className="width-two-four" required />
                                <label className="inline-block width-one-nine m-1-5">วันที่เอกสาร</label>
                                <input type="text" onChange={() => handleDocDate} className="width-two" placeholder="date/month/year" maxLength={10} required />
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
                    <button type="button" className="butt-green">Save</button>
                </article>
            </main>

        </div>
    );
}

export default GoodsReceive;