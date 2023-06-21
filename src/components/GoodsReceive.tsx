const GoodsReceive = () => {
    return(
        <div>
            <h1>Goods Receive</h1>
            <form>
                <label>Seller no.</label>
                <select name='seller id'>
                    <option value='Green staionary'>Green Stationary</option>
                    <option value='B2S'>B2S</option>
                </select>
                <input type="text" value='seller id value'/>
                <br/>
                <label>Doc list</label>
                <select name='doc list'>
                    <option value='R01'>R01</option>
                </select>
                <input type="text" value='Seller'/>
                <br/>
                <label>Doc no.</label>
                <input type='text' placeholder="RS5206-00003"/>
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
                    <option value='buying dep'>004-PU</option>
                </select>
                <input type="text" value='Buying Dep'/>
                <br/>
                <label>Recorder</label>
                <select name="recorder">
                    <option value='Somying Mana'>EMP-00001</option>
                </select>
                <label>Receiver</label>
                <select name='receiver'>
                    <option value='Kanya Medee'>EMP-00002</option>
                </select>
                <br/>
                <label>Remark</label>
                <input type="text"/>
                <input type="text"/>
            </form>

            <section data-name='goods input'>
                <form>
                    <label>Product Code</label>
                    <input type="text"  placeholder="601-1-41"/>
                    <br/>
                    <label>Product Name</label>
                    <input type='text' placeholder="Pen Nanmee Black"/>
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
                        <option value='BOX'>BOX</option>
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

export default GoodsReceive;