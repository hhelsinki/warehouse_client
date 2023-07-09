import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'
import { FormEvent } from 'react';

interface FormGR {
    code: string, setCode: any, title: string, setTitle: any, stock: string, setStock: any, addItem: any, editItem: any, edit: string, location: string, setLocation: any, unit: string, setUnit: any, amount: string, setAmount: any, price_unit: string, setPriceUnit: any, price_total: number, setPriceTotal: any, error: string, setError: any
}

const Form = ({ code, setCode, title, setTitle, stock, setStock, addItem, editItem, edit, location, setLocation, unit, setUnit, amount, setAmount, price_unit, setPriceUnit, price_total, setPriceTotal, error, setError }: FormGR) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /*if (title.length === 0) {
            setError('Please enter title');
            return;
        }*/
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }

    return (
        <article data-name='goods receive input' className="gr__insert">
            <h3 className='text-center'>เพิ่มสินค้า...</h3>
            <form onSubmit={handleSubmit} className='m-3'>
                <label>รหัสสินค้า: </label>
                <input type="text" onChange={(e) => setCode(e.target.value)} value={code} required />
                <br />
                <label>ชื่อสินค้า: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required />
                <br />
                <label>คลัง: </label>
                <select onChange={(e) => setStock(e.target.value)} required>
                    <option value=''>-- STOCK --</option>
                    <option value='A-01'>A-01</option>
                    <option value='A-02'>A-02</option>
                    <option value='A-03'>A-03</option>
                    <option value='A-04'>A-04</option>
                </select>
                {/*<input type="text" onChange={(e) => setStock(e.target.value)} value={stock} required/>*/}
                <br />
                <label>ที่เก็บ: </label>
                <select onChange={(e) => setLocation(e.target.value)} required>
                    <option value=''>-- LOCATION --</option>
                    <option value='01'>01</option>
                    <option value='02'>02</option>
                    <option value='03'>03</option>
                    <option value='04'>04</option>
                </select>
                {/*<input type="text" onChange={(e) => setLocation(e.target.value)} value={location} required />*/}
                <br />
                <label>หน่วยนับ: </label>
                <select onChange={(e) => setUnit(e.target.value)} required>
                    <option value=''>-- UNIT --</option>
                    <option value='PCS'>PCS</option>
                    <option value='PACK'>PACK</option>
                    <option value='PAIR'>PAIR</option>
                    <option value='DOZEN'>DOZEN</option>
                </select>
                {/*<input type="text" onChange={(e) => setUnit(e.target.value)} value={unit} required />*/}
                <br />
                <label>จำนวน: </label>
                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} required />
                <br />
                <label>ราคา/หน่วย: </label>
                <input type="number" onChange={(e) => setPriceUnit(e.target.value)} value={price_unit} required />
                <br />
                <label>จำนวนเงิน: </label>
                <input type="text" value={price_total} readOnly />
                <br />
                <button type="submit" className='border-0'>{edit ? 'Edit' : 'Add'}</button>
            </form>
        </article>
    );
}

const mapStateToProps = (state: any) => {
    return {
        code: state.code,
        title: state.title,
        edit: state.edit,
        error: state.error,
        //extension
        stock: state.stock,
        location: state.location,
        unit: state.unit,
        amount: state.amount,
        price_unit: state.price_unit,
        price_total: state.amount * state.price_unit
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setCode: (code: string) => dispatch(actionTypes.setCode(code)),
        setTitle: (title: string) => dispatch(actionTypes.setTitle(title)),
        setError: (error: string) => dispatch(actionTypes.setError(error)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: (item: string[]) => dispatch(actionTypes.editItem(item)),
        //extension
        setStock: (stock: string) => dispatch(actionTypes.setStock(stock)),
        setLocation: (location: string) => dispatch(actionTypes.setLocation(location)),
        setUnit: (unit: string) => dispatch(actionTypes.setUnit(unit)),
        setAmount: (amount: number) => dispatch(actionTypes.setAmount(amount)),
        setPriceUnit: (price_unit: number) => dispatch(actionTypes.setPriceUnit(price_unit)),
        setPriceTotal: (price_total: number) => dispatch(actionTypes.setPriceTotal(price_total)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);