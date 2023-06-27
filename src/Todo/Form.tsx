import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'
import { FormEvent } from 'react';

interface Form {
    code: string, setCode: any, title: string, setTitle: any, stock: string, setStock: any, addItem: any, editItem: any, edit: string, location: string, setLocation: any, unit: string, setUnit: any, amount: string, setAmount: any, price_unit: string, setPriceUnit: any, price_total: number, setPriceTotal: any, error: string, setError: any
}

const Form = ({ code, setCode, title, setTitle, stock, setStock, addItem, editItem, edit, location, setLocation, unit, setUnit, amount, setAmount, price_unit, setPriceUnit, price_total, setPriceTotal, error, setError }: Form) => {

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
        <article data-name='goods receive input' style={{ width: '25vw', background: 'grey' }}>
            <h2>Please Enter...</h2>
            <form onSubmit={handleSubmit} className='m-3'>
                <label style={{ width: '35%', display: 'inline-block' }}>Product Code: </label>
                <input type="text" onChange={(e) => setCode(e.target.value)} value={code} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Product Name: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Stock: </label>
                <input type="text" onChange={(e) => setStock(e.target.value)} value={stock} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Location: </label>
                <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Unit: </label>
                <input type="text" onChange={(e) => setUnit(e.target.value)} value={unit} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Amount: </label>
                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Price/Unit: </label>
                <input type="number" onChange={(e) => setPriceUnit(e.target.value)} value={price_unit} />
                <br />
                <label style={{ width: '35%', display: 'inline-block' }}>Total Price: </label>
                <input type="text" value={price_total} readOnly />
                <br />
                <button type="submit" style={{ padding: '8px 12px', display: 'block', margin: '5px auto 0 auto' }}>{edit ? 'Edit' : 'Add'}</button>
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