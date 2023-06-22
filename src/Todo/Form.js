import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

const Form = ({ code, setCode, title, setTitle, stock, setStock, addItem, editItem, edit, location, setLocation, unit, setUnit, amount, setAmount, price_unit, setPriceUnit, price_total, setPriceTotal, error, setError }) => {
    /*const handleChange = (e) => {
        const title = e.target.value;

        setTitle(title);
        
        if (title.length === 0) {
            setError('Please enter title');
        } else {
            setError('');
        }
        
    }*/

    const handleSubmit = (e) => {
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

    //extension
    const handleStock = (e) => {
        const stock = e.target.value;
        setStock(stock);
    }

    return (
        <article data-name='goods receive input' style={{width:'30vw', background:'grey'}}>
            <h2>Please Enter...</h2>
            <form onSubmit={handleSubmit}>
                <label>Product Code: </label>
                <input type="text" onChange={(e) => setCode(e.target.value)} value={code} />
                <br />
                <label>Product Name: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                <br />
                <label>Stock: </label>
                <input type="text" onChange={(e) => setStock(e.target.value)} value={stock} />
                <br />
                <label>Location: </label>
                <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} />
                <br />
                <label>Unit: </label>
                <input type="text" onChange={(e) => setUnit(e.target.value)} value={unit} />
                <br />
                <label>Amount: </label>
                <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
                <br />
                <label>Price/Unit: </label>
                <input type="number" onChange={(e) => setPriceUnit(e.target.value)} value={price_unit} />
                <br />
                <label>Total Price: </label>
                <input type="text" value={price_total} readOnly/>
                <br />
                <button type="submit">{edit ? 'Edit' : 'Add'}</button>
            </form>
        </article>
    );
}

const mapStateToProps = (state) => {
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

const mapDispatchToProps = dispatch => {
    return {
        setCode: (code) => dispatch(actionTypes.setCode(code)),
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: () => dispatch(actionTypes.editItem()),
        //extension
        setStock: (stock) => dispatch(actionTypes.setStock(stock)),
        setLocation: (location) => dispatch(actionTypes.setLocation(location)),
        setUnit: (unit) => dispatch(actionTypes.setUnit(unit)),
        setAmount: (amount) => dispatch(actionTypes.setAmount(amount)),
        setPriceUnit: (price_unit) => dispatch(actionTypes.setPriceUnit(price_unit)),
        setPriceTotal: (price_total) => dispatch(actionTypes.setPriceTotal(price_total)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);