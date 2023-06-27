import { useSelector } from "react-redux";
import FormIS from "./FormIS";
import ProductListIS from "./ProductListIS";
import { ChangeEvent, useState } from "react";
//import {items} from "../store/reducers";
import '../css/global.css';
import '../css/home.scss';
import Header from "../part/Header";

function IssueStock() {
    const items = useSelector((state:any) => state.items);
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


    const handleSeller = (e:ChangeEvent<HTMLInputElement>) => {
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
    return (
        <div className="m-3">
        <Header/>
            <article data-name='goods receive' style={{ height: '35vh' }}>
                <h1 className="text-center">Issue Stock</h1>
                <form onSubmit={(e) => e.preventDefault} >
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px' }}>
                        <div style={{ border: '1px solid grey' }}>
                            <label style={{ width: '10%', display: 'inline-block' }}>Seller no.</label>
                            <select name='seller id' onChange={()=>handleSeller} style={{ width: '25%' }} required>
                                <option value=''>Pick Seller</option>
                                <option value='VEN-00006'>VEN-00006</option>
                                <option value='VEN-00007'>VEN-00007</option>
                            </select>
                            <input type="text" value={seller.name}  style={{ margin: '5px', width: '40%' }} readOnly/>
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Doc list</label>
                            <select name='doc list' style={{ width: '25%' }} required>
                                <option value='R01'>R01</option>
                            </select>
                            <input type="text" value={doc.type}  style={{ margin: '5px', width: '40%' }} readOnly/>
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Doc no.</label>
                            <input type='text' onChange={(e) => setDoc({ ...doc, no: e.target.value })} placeholder="RS5206-00003" style={{ width: '24%' }} required/>
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Doc date</label>
                            <input type="text" onChange={()=>handleDocDate} placeholder="date/month/year" maxLength={10} style={{ width: '20%' }} required/>
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Doc ref</label>
                            <input type='text' onChange={(e) => setDoc({ ...doc, ref: e.target.value })} style={{ width: '24%' }} />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Doc date ref</label>
                            <input type="text" onChange={(e) => setDoc({ ...doc, ref_date: e.target.value })} placeholder="date/month/year" style={{ width: '20%' }} />
                            <br />
                            <label style={{ width: '10%', display: 'inline-block' }}>Recorder</label>
                            <select name="recorder" style={{ width: '25%' }} required>
                                <option value={recorder.code}>EMP-00001</option>
                            </select>
                            <input type="text" value={recorder.name}  style={{ margin: '5px', width: '40%' }} readOnly/>
                        </div>

                        <div style={{ border: '1px solid grey' }}>
                            <div style={{padding:'8px 0', border:'1px solid green', width:'50%', textAlign:'center', margin: '5px auto 0 auto'}}>Issue Stock</div>
                            <br/>
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>DP no.</label>
                            <input type='text' onChange={(e) => setDP({ ...DP, no: e.target.value })} style={{width:'24%'}}/>
                            <br />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Department</label>
                            <select name='department' style={{width:'25%'}} required>
                                <option value={DP.dep_code}>003-SL</option>
                            </select>
                            <input type="text" value={DP.dep_title}  style={{marginLeft:'5px'}} readOnly/>
                            <br />
                            <label style={{ display: 'inline-block', margin: '5px', width: '19%' }}>Receiver</label>
                            <select name='receiver' style={{width:'25%'}} required>
                                <option value={DP.receiver_code}>EMP-00003</option>
                            </select>
                            <input type="text" value={DP.receiver_name}  style={{marginLeft:'5px'}} readOnly/>

                        </div>
                    </div>

                    <div style={{ display: 'flex', marginTop:'5px' }}>
                        <div style={{ width: '10%' }}>
                            <label>Remark</label>
                        </div>
                        <div style={{ width: '80%' }}>
                            <input type="text" onChange={(e)=> setRemark({...remark, i: e.target.value})} style={{ width: '90%', float: 'right' }} />
                            <br />
                            <input type="text" onChange={(e)=> setRemark({...remark, ii: e.target.value})} style={{ width: '90%', float: 'right', marginTop:'5px' }} />
                        </div>
                    </div>


                </form>
            </article>
            <div style={{ height:'50vh', display: 'flex' }}>
                <ProductListIS />
                <FormIS />
            </div>
        </div>
    );
}

export default IssueStock;