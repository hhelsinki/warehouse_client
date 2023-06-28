import { useSelector } from "react-redux";
import FormIS from "./FormIS";
import ProductListIS from "./ProductListIS";
import { ChangeEvent, useEffect, useState } from "react";
//import {items} from "../store/reducers";
import '../css/global.css';
import '../css/home.scss';
import Header from "../part/Header";
import Footer from "../part/Footer";
import { Link } from "react-router-dom";

function IssueStock() {
    const items = useSelector((state: any) => state.items);
    const [historyPath, setHistoryPath] = useState<string>('');
    const [seller, setSeller] = useState({
        id: '', name: ''
    });
    const [doc, setDoc] = useState({
        code: 'S01', type: 'เบิกขาย', no: '', date: '', ref: '', ref_date: ''
    });
    const [recorder, setRecorder] = useState({
        code: 'EMP-00001', name: 'Kanya Pasook'
    });
    const [DP, setDP] = useState({
        no: '', dep_code: '003-SL', dep_title: 'แผนกขายสินค้า', receiver_code: 'EMP-00003', receiver_name: 'Pannee Poochai'
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

    console.log(doc.date)

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
            <article data-name='issue stock' className="gr__headline">
                <h1 className="text-center">จ่ายสินค้า</h1>
                <form onSubmit={(e) => e.preventDefault} >
                    <div className="gr__credential-i">
                        <div className="rounded-lg">
                            <label className="width-two inline-block">รหัสลูกค้า</label>
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
                            <input type="text" onChange={() => handleDocDate} placeholder="date/month/year" maxLength={10} className="width-two" required />
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
                <button type="button" className="butt-green">Save</button>
            </article>
        </div>
    );
}

export default IssueStock;