import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../part/Header";

interface Credential {
    seller_id: string, seller_name: string,
    doc_code: string, doc_type: string, doc_no: string, doc_date: string, doc_ref: string, doc_ref_date: string,
    rec_code: string, rec_name: string,
    do_no: string,
    do_dep_code: string, do_dep_title: string,
    do_receiver_code: string, do_receive_name: string,
    remark_i: string, remark_ii: string
}

const HistoryResult = () => {
    const [historyList, setHistoryList] = useState<string[]>([]);
    const [search, setSearch] = useState<string>('');
    const [data, setData] = useState<string[]>([]);
    const [credential, setCredential] = useState<Credential>({
        seller_id: '', seller_name: '',
        doc_code: '', doc_type: '', doc_no: '', doc_date: '', doc_ref: '', doc_ref_date: '',
        rec_code: '', rec_name: '',
        do_no: '',
        do_dep_code: '', do_dep_title: '',
        do_receiver_code: '', do_receive_name: '',
        remark_i: '', remark_ii: ''
    });
    let { typeId } = useParams();

    const handleHistory = async () => {
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/${typeId}`
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
        let param: string = '';

        if (typeId === 'history-gr') {
            param = 'search-gr?id=';
            setSearch('../history-gr/search-gr?id=')

        }
        if (typeId === 'history-is') {
            param = 'search-is?id=';
            setSearch('../history-is/search-gr?id=')
        }

        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/${param}${query}`
        }

        axios(config)
            .then((res) => {
                console.log(res.data)
                switch (res.data.data) {
                    case null: case undefined:
                        break;
                    default:
                        /*setCredential({
                            seller_id: res.data.data.seller.id, 
                            seller_name: res.data.data.seller.name,
                            doc_code: res.data.data.doc.code, 
                            doc_type: res.data.data.doc.type,
                            doc_no: res.data.data.doc.no, 
                            doc_date: res.data.data.doc.date, 
                            doc_ref: res.data.data.doc.ref, 
                            doc_ref_date: res.data.data.doc.ref_doc,
                            rec_code: res.data.data.recorder.code, 
                            rec_name: res.data.data.recorder.name,
                            do_no: res.data.data.do.no,
                            do_dep_code: res.data.data.do.department.code, 
                            do_dep_title: res.data.data.do.department.title,
                            do_receiver_code: res.data.data.do.receiver.code, 
                            do_receive_name: res.data.data.do.receiver.name,
                            remark_i: res.data.data.remark.i, 
                            remark_ii: res.data.data.remark.ii
                        });*/
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
        <div>
            <Header />
            <h1>History</h1>
            <div className="dp-flex">
                <section className="width-seven-vw" style={{ border: '1px solid black' }}>
                    {/*{data.map((item: any, index: number) => {
                        return <form key={index}>
                            <label style={{ width: '10%', display: 'inline-block' }}>Seller no.</label>
                            <select name='seller id' style={{ width: '25%' }}>
                                <option value={item.seller.id}>{item.seller.id}</option>
                            </select>
                            <input type="text" value={item.seller.name} readOnly style={{ margin: '5px', width: '40%' }} />
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Doc list</label>
                            <select name='doc list' style={{ width: '25%' }}>
                                <option value={item.doc.code}>{item.doc.code}</option>
                            </select>
                            <input type="text" value={item.doc.type} readOnly style={{ margin: '5px', width: '40%' }} />
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Doc no.</label>
                            <input type='text' value={item.doc.no} style={{ width: '24%' }} readOnly />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Doc date</label>
                            <input type="text" value={item.doc.date} maxLength={10} style={{ width: '20%' }} readOnly />
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Doc ref</label>
                            <input type='text' value={item.doc.ref} style={{ width: '24%' }} readOnly />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Doc date ref</label>
                            <input type="text" value={item.doc.ref_date} style={{ width: '20%' }} readOnly />
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Recorder</label>
                            <select name="recorder" style={{ width: '25%' }}>
                                <option value={item.recorder.code}>EMP-00001</option>
                            </select>
                            <input type="text" value={item.recorder.name} style={{ margin: '5px', width: '40%' }} readOnly />


                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>DO no.</label>
                            <input type='text' value={item.do.no} style={{ width: '24%' }} readOnly />
                            <br />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Department</label>
                            <select name='department' style={{ width: '25%' }}>
                                <option value={item.do.department.code}>{item.do.department.code}</option>
                            </select>
                            <input type="text" value={item.department.title} style={{ marginLeft: '5px' }} readOnly />
                            <br />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Receiver</label>
                            <select name='receiver' style={{ width: '25%' }}>
                                <option value={item.do.receiver_code}>{item.do.receiver_code}</option>
                            </select>
                            <input type="text" value={item.do.receiver.name} style={{ marginLeft: '5px' }} readOnly />

                            <label>Remark</label>
                            <input type="text" value={item.remark.i} style={{ width: '90%', float: 'right' }} readOnly />
                            <br />
                            <input type="text" value={item.remark.ii} style={{ width: '90%', float: 'right', marginTop: '5px' }} readOnly />
                        </form>
                    })}
                    */}
                    <div className="dp-flex list__item">
                        <div className='text-center'>No.</div>
                        <div className='text-center'>Product No.</div>
                        <div className='text-center'>Product Name</div>
                        <div className='text-center'>Stock</div>
                        <div className='text-center'>Location</div>
                        <div className='text-center'>Unit</div>
                        <div className='text-center'>Amount</div>
                        <div className='text-center'>Price/Unit</div>
                        <div className='text-center'>Total Price</div>
                    </div>
                    {data.map((item: any, index: number) => {
                        return <div key={index} className="dp-flex list__item">
                            <div>{index + 1}</div>
                            <div>{item.code}</div>
                            <div>{item.name}</div>
                            <div>{item.stock}</div>
                            <div>{item.location}</div>
                            <div>{item.unit}</div>
                            <div>{item.amount}</div>
                            <div>{item.price_unit}</div>
                            <div>{item.price_total}</div>
                        </div>
                    })}
                </section>

                <section className="width-three-vw" style={{ border: '1px solid black' }}>
                    <h2>History List</h2>
                    <div className="dp-flex">
                        <div className="width-five">Doc no.</div>
                        <div className="width-five">Date</div>
                    </div>

                    {historyList.map((item: any, index: number) => {
                        return <div key={index} className="dp-flex">
                            <div className="width-five"><a href={search + item.doc_no}>{item.doc_no}</a></div>
                            <div className="width-five">{item.date}</div>
                        </div>
                    })}
                </section>
            </div>
        </div >
    );
}

export default HistoryResult;