import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'
import { FormEvent } from 'react';

interface Form {
    code__is: string, setCodeIS: any, title__is: string, setTitleIS: any, stock__is: string, setStockIS: any, addItemIS: any, editItemIS: any, edit__is: string, location__is: string, setLocationIS: any, unit__is: string, setUnitIS: any, amount__is: string, setAmountIS: any, price_unit__is: string, setPriceUnitIS: any, price_total__is: number, setPriceTotalIS: any, error__is: string, setErrorIS: any
}

const FormIS = ({ code__is, setCodeIS, title__is, setTitleIS, stock__is, setStockIS, addItemIS, editItemIS, edit__is, location__is, setLocationIS, unit__is, setUnitIS, amount__is, setAmountIS, price_unit__is, setPriceUnitIS, price_total__is, setPriceTotalIS, error__is, setErrorIS }: Form) => {
    /*const handleChange = (e) => {
        const title = e.target.value;

        setTitle(title);
        
        if (title.length === 0) {
            setError('Please enter title');
        } else {
            setError('');
        }
        
    }*/

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /*if (title.length === 0) {
            setError('Please enter title');
            return;
        }*/
        if (edit__is) {
            editItemIS();
        } else {
            addItemIS();
        }
    }

    return (
        <article data-name='goods receive input' style={{width:'25vw', background:'grey'}}>
            <h2>Please Enter...</h2>
            <form onSubmit={handleSubmit} className='m-3'>
                <label style={{width:'35%', display:'inline-block'}}>Product Code: </label>
                <input type="text" onChange={(e) => setCodeIS(e.target.value)} value={code__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Product Name: </label>
                <input type="text" onChange={(e) => setTitleIS(e.target.value)} value={title__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Stock: </label>
                <input type="text" onChange={(e) => setStockIS(e.target.value)} value={stock__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Location: </label>
                <input type="text" onChange={(e) => setLocationIS(e.target.value)} value={location__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Unit: </label>
                <input type="text" onChange={(e) => setUnitIS(e.target.value)} value={unit__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Amount: </label>
                <input type="number" onChange={(e) => setAmountIS(e.target.value)} value={amount__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Price/Unit: </label>
                <input type="number" onChange={(e) => setPriceUnitIS(e.target.value)} value={price_unit__is} required/>
                <br />
                <label style={{width:'35%', display:'inline-block'}}>Total Price: </label>
                <input type="text" value={price_total__is} readOnly/>
                <br />
                <button type="submit" style={{padding:'8px 12px', display:'block', margin:'5px auto 0 auto'}}>{edit__is ? 'Edit' : 'Add'}</button>
            </form>
        </article>
    );
}

const mapStateToProps = (state:any) => {
    return {
        code__is: state.code__is,
        title__is: state.title__is,
        edit__is: state.edit__is,
        error__is: state.error__is,
        //extension
        stock__is: state.stock__is,
        location__is: state.location__is,
        unit__is: state.unit__is,
        amount__is: state.amount__is,
        price_unit__is: state.price_unit__is,
        price_total__is: state.amount__is * state.price_unit__is
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setCodeIS: (code__is:string) => dispatch(actionTypes.setCodeIS(code__is)),
        setTitleIS: (title__is:string) => dispatch(actionTypes.setTitleIS(title__is)),
        setErrorIS: (error__is:string) => dispatch(actionTypes.setErrorIS(error__is)),
        addItemIS: () => dispatch(actionTypes.addItemIS()),
        editItemIS: (item__is:string []) => dispatch(actionTypes.editItemIS(item__is)),
        //extension
        setStockIS: (stock__is:string) => dispatch(actionTypes.setStockIS(stock__is)),
        setLocationIS: (location__is:string) => dispatch(actionTypes.setLocationIS(location__is)),
        setUnitIS: (unit__is:string) => dispatch(actionTypes.setUnitIS(unit__is)),
        setAmountIS: (amount__is:number) => dispatch(actionTypes.setAmountIS(amount__is)),
        setPriceUnitIS: (price_unit__is:number) => dispatch(actionTypes.setPriceUnitIS(price_unit__is)),
        setPriceTotalIS: (price_total__is:number) => dispatch(actionTypes.setPriceTotalIS(price_total__is)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormIS);