const IssueStock = () => {
    return(
        <div>
            <h1>Issue Stock</h1>
            <form>
                <label>Customer no.</label>
                <select name='customer id'>
                    <option value='The Mall Group'>The Mall Group</option>
                </select>
                <input type="text" value='customer id value'/>
                <br/>
                <label>Doc list</label>
                <select name='doc list'>
                    <option value='S01'>S01</option>
                </select>
                <input type="text" value='Buyer'/>
                <br/>
                <label>Doc no.</label>
                <input type='text' placeholder="IS5206-00003"/>
                <label>Doc date</label>
                <input type="text" placeholder="date/month/year"/>
                <label>DO no.</label>
                <br/>
                <label>Doc ref</label>
                <input type='text'/>
                <label>Doc date ref</label>
                <input type="text" placeholder=" / / "/>
                <label>Department</label>
                <select name='department'>
                    <option value='buying dep'>003-SL</option>
                </select>
                <input type="text" value='Seller Dep'/>
                <br/>
                <label>Recorder</label>
                <select name="recorder">
                    <option value='Somying Mana'>EMP-00001</option>
                </select>
                <label>Receiver</label>
                <select name='receiver'>
                    <option value='Somchai Jaidee'>EMP-00003</option>
                </select>
                <br/>
                <label>Remark</label>
                <input type="text"/>
                <input type="text"/>
            </form>

            <section data-name='goods input'>
                <form>
                    <label>Product Code</label>
                    <input type="text"  placeholder="009-2120"/>
                    <br/>
                    <label>Product Name</label>
                    <input type='text' placeholder="Jar Ocean"/>
                    <br/>
                    <label>Stock</label>
                    <select name='stock'>
                        <option value='01'>01</option>
                    </select>
                    <br/>
                    <label>Location</label>
                    <select name='location'>
                        <option value='A-02'>A-02</option>
                    </select>
                    <br/>
                    <label>Unit</label>
                    <select name='unit'>
                        <option value='PCS'>PCS</option>
                        <option value='PACK'>PACK</option>
                        <option value='SET'>SET</option>
                        <option value='SET'>BOX</option>
                    </select>
                    <br/>
                    <label>Total Amount</label>
                    <input type="number"/>
                    <br/>
                    <label>Price/Unit</label>
                    <input type="number"/>
                    <br/>
                    <label>Total Price</label>
                    <input type="number" value='amount * unit'/>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </section>
            <section data-name='goods output'>
                <ul>Dispatch data here
                </ul>
                <p>Total Amount </p>
                <p>Total Price </p>
            </section>
        </div>
    );
}

export default IssueStock;