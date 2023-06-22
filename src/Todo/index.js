import { useSelector } from "react-redux";
import Form from "./Form";
import TodoList from "./TodoList";
import { useState } from "react";
//import {items} from "../store/reducers";

function Todo() {
    const items = useSelector((state) => state.items);
    const [seller, setSeller] = useState({
        id: '', name: ''
    });

    console.log(items);
    return (
        <>
            <article data-name='goods receive' style={{ height: '30vh' }}>
                <form onSubmit={(e) => e.preventDefault}>
                    <label>Seller no.</label>
                    <select name='seller id' onChange={(e)=> setSeller({...seller, id: e.target.value})}>
                        <option value=''>Pick Seller</option>
                        <option value='Green staionary' >VEN-00006</option>
                        <option value='B2S'>VEN-00007</option>
                    </select>
                    <input type="text" value={seller} readOnly/>
                    <br />
                    <label>Doc list</label>
                    <select name='doc list'>
                        <option value='R01'>R01</option>
                    </select>
                    <input type="text" value='Seller' />
                    <br />
                    <label>Doc no.</label>
                    <input type='text' placeholder="RS5206-00003" />
                    <label>Doc date</label>
                    <input type="text" placeholder="date/month/year" />
                    <label>DO no.</label>
                    <br />
                    <label>Doc ref</label>
                    <input type='text' />
                    <label>Doc date ref</label>
                    <input type="text" placeholder=" / / " />
                    <label>Department</label>
                    <select name='department'>
                        <option value='buying dep'>004-PU</option>
                    </select>
                    <input type="text" value='Buying Dep' />
                    <br />
                    <label>Recorder</label>
                    <select name="recorder">
                        <option value='Somying Mana'>EMP-00001</option>
                    </select>
                    <label>Receiver</label>
                    <select name='receiver'>
                        <option value='Kanya Medee'>EMP-00002</option>
                    </select>
                    <br />
                    <label>Remark</label>
                    <input type="text" />
                    <input type="text" />
                </form>
            </article>
            <div style={{ display: 'flex' }}>
                <Form />
                <TodoList />
            </div>
        </>
    );
}

export default Todo;