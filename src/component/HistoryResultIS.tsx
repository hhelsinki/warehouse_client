import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../part/Header";

interface Credential {
    buyer_id: string, buyer_name: string,
    doc_code: string, doc_type: string, doc_no: string, doc_date: string, doc_ref: string, doc_ref_date: string,
    rec_code: string, rec_name: string,
    dp_no: string,
    dp_dep_code: string, dp_dep_title: string,
    dp_receiver_code: string, dp_receiver_name: string,
    remark_i: string, remark_ii: string,
    total_amount: number, total_price: number
}

const HistoryResultIS = () => {
    const [historyList, setHistoryList] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState<string[]>([]);
    const [credent, setCredent] = useState<Credential>({
        buyer_id: '', buyer_name: '',
        doc_code: '', doc_type: '', doc_no: '', doc_date: '', doc_ref: '', doc_ref_date: '',
        rec_code: '', rec_name: '',
        dp_no: '',
        dp_dep_code: '', dp_dep_title: '',
        dp_receiver_code: '', dp_receiver_name: '',
        remark_i: '', remark_ii: '',
        total_amount: 0, total_price: 0
    });
    let { typeId } = useParams();

    const handleHistory = async () => {
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/history-is`
        }

        axios(config)
            .then((res) => {
                switch (res.data.data[0]) {
                    case null: case undefined:
                        break;
                    default:
                        let newHistory: string[] = [];
                        res.data.data.forEach((item: any, index: number) => newHistory.push(item));
                        setHistoryList(newHistory);
                        break;
                }

            })
            .catch((err) => {
                console.log('err API: /typeId');
            })
    }

    const handleHistoryByQuery = async () => {
        let query: string | null = (new URLSearchParams(window.location.search)).get('id');
        setSearch('../history-is/search-is?id=');

        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/search-is?id=${query}`
        }

        await axios(config)
            .then((res) => {
                console.log(res.data.data.total_amount)
                switch (res.data.data) {
                    case null: case undefined:
                        break;
                    default:
                        setCredent({
                            buyer_id: res.data.data.buyer.id,
                            buyer_name: res.data.data.buyer.name,
                            doc_code: res.data.data.doc.code,
                            doc_type: res.data.data.doc.type,
                            doc_no: res.data.data.doc.no,
                            doc_date: res.data.data.doc.date,
                            doc_ref: res.data.data.doc.ref,
                            doc_ref_date: res.data.data.doc.ref_date,
                            rec_code: res.data.data.recorder.code,
                            rec_name: res.data.data.recorder.name,
                            dp_no: res.data.data.dp.no,
                            dp_dep_code: res.data.data.dp.department.code,
                            dp_dep_title: res.data.data.dp.department.title,
                            dp_receiver_code: res.data.data.dp.receiver.code,
                            dp_receiver_name: res.data.data.dp.receiver.name,
                            remark_i: res.data.data.remark.i,
                            remark_ii: res.data.data.remark.ii,
                            total_amount: res.data.data.total_amount,
                            total_price: res.data.data.total_price
                        });
                        let newHistoryResult: string[] = [];
                        res.data.data.data.forEach((item: any, index: number) => newHistoryResult.push(item));
                        setData(newHistoryResult);
                        break;
                }
            })
            .catch((err) => {
                console.log('err API: search')
            })
    }

    useEffect(() => {
        handleHistory();
        handleHistoryByQuery();

    }, []);

    return (
        <div className="width-l m-auto p-df">
            <Header />
            <h1 className="text-center">ประวัติจ่ายสินค้า</h1>
            <div className="flex">
                <section className="width-seven-vw height-seven-vh p-df" style={{ border: '1px solid black' }}>
                    <form>
                        <label className="width-one inline-block">รหัสลูกค้า</label>
                        <select name='seller id' className="width-two-four">
                            <option value={credent.buyer_id}>{credent.buyer_id}</option>
                        </select>
                        <input type="text" value={credent.buyer_name} readOnly className="width-four m-1-5" />
                        <br />
                        <label className="width-one inline-block">รายการเอกสาร</label>
                        <select name='doc list' className="width-two-four">
                            <option value={credent.doc_code}>{credent.doc_code}</option>
                        </select>
                        <input type="text" value={credent.doc_type} readOnly className="width-four m-1-5" />
                        <br />
                        <label className="width-one inline-block">เลขที่เอกสาร</label>
                        <input type='text' value={credent.doc_no} className="width-two-four" readOnly />
                        <label className="width-one-nine m-1-5 inline-block">วันที่เอกสาร</label>
                        <input type="text" value={credent.doc_date} maxLength={10} className="width-two" readOnly />
                        <br />
                        <label className="width-one inline-block">เลขที่เอกสาร</label>
                        <input type='text' value={credent.doc_ref} className="width-two-four" readOnly />
                        <label className="width-one-nine m-1-5 inline-block">วันที่เอกสารอ้างอิง</label>
                        <input type="text" value={credent.doc_ref_date} className="width-two" readOnly />
                        <br />
                        <label className="width-one inline-block">ผู้บันทึก</label>
                        <select name="recorder" className="width-two-four">
                            <option value={credent.rec_code}>EMP-00001</option>
                        </select>
                        <input type="text" value={credent.rec_name} className="width-four m-1-5" readOnly />
                        <br />
                        <label className="width-one-nine m-1-5 inline-block">เลขที่ใบ DP</label>
                        <input type='text' value={credent.dp_no} className="width-two-four" readOnly />
                        <br />
                        <label className="width-one-nine m-1-5 inline-block">แผนก</label>
                        <select name='department' className="width-two-four">
                            <option value={credent.dp_dep_code}>{credent.dp_dep_code}</option>
                        </select>
                        <input type="text" value={credent.dp_dep_title} className="ml-1-5" readOnly />
                        <br />
                        <label className="width-one-nine m-1-5 inline-block">ผู้ส่งสินค้า</label>
                        <select name='receiver' className="width-two-four">
                            <option value={credent.dp_receiver_code}>{credent.dp_receiver_code}</option>
                        </select>
                        <input type="text" value={credent.dp_receiver_name} className="ml-1-5" readOnly />
                        <br />
                        <label>หมายเหตุ</label>
                        <input type="text" value={credent.remark_i} className="width-nine float-right" readOnly />
                        <br />
                        <input type="text" value={credent.remark_ii} className="width-nine float-right mt-1-5" readOnly />
                        <div style={{ marginBottom: '40px' }}></div>
                    </form>

                    <div className="flex stock__list bg-prim">
                        <div className='text-center'>No.</div>
                        <div className='text-center'>รหัสสินค้า</div>
                        <div className='text-center'>ชื่อสินค้า</div>
                        <div className='text-center'>คลัง</div>
                        <div className='text-center'>ที่เก็บ</div>
                        <div className='text-center'>หน่วยนับ</div>
                        <div className='text-center'>จำนวน</div>
                        <div className='text-center'>ราคา/หน่วย</div>
                        <div className='text-center'>จำนวนเงิน</div>
                    </div>
                    <div className="history__result overflow-y-scroll">
                        {data.map((item: any, index: number) => {
                            return <div key={index} className="flex stock__list overflow-y-scroll">
                                <div>{index + 1}</div>
                                <div>{item.code__is}</div>
                                <div>{item.title__is.substring(0, 25)}{item.title__is.length >= 25 && '...'}</div>
                                <div>{item.stock__is}</div>
                                <div>{item.location__is}</div>
                                <div>{item.unit__is}</div>
                                <div className="text-right">{item.amount__is.toLocaleString()}</div>
                                <div className="text-right">{item.price_unit__is.toLocaleString()}</div>
                                <div className="text-right">{item.price_total__is.toLocaleString()}</div>
                            </div>
                        })}
                    </div>

                </section>

                <section className="width-three-vw height-seven-vh p-df history__list-option">
                    <h2 className="text-center">รายการจ่ายสินค้า</h2>
                    <div className="flex history__list bg-prim">
                        <div className="width-five">เลขที่เอกสาร</div>
                        <div className="width-five">วันที่เอกสาร</div>
                    </div>

                    {historyList.map((item: any, index: number) => {
                        return <div key={index} className="flex history__list">
                            <div className="width-five"><a href={search + item.doc_no}>{item.doc_no}</a></div>
                            <div className="width-five">{item.date}</div>
                        </div>
                    })}
                </section>
            </div>
            <div className="absolute" style={{ bottom: '0' }}>
                <p>รวมจำนวน: {credent.total_amount.toLocaleString()} | เงิน: {credent.total_price.toLocaleString()} บาท</p>
            </div>
        </div >
    );
}

export default HistoryResultIS;