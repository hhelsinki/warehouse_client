import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

function ProductList({ todoList, setCode, setTitle, setStock, setItem, setEdit, deleteItem, setLocation, setUnit, setAmount, setPriceUnit, setPriceTotal }) {
    const handleEdit = (item) => {
        setCode(item.code)
        setTitle(item.title);
        //extension
        setStock(item.stock);
        setLocation(item.location);
        setUnit(item.unit);
        setAmount(item.amount);
        setPriceUnit(item.price_unit);
        setPriceTotal(item.price_total);

        setEdit();
        setItem(item);
    }

    const handleDelete = (item) => {
        setItem(item);
        deleteItem();
    }

    //console.log(todoList)

    return (
        <article data-name='goods receive output' style={{ width: '74vw' }} className='overflow-y-scroll'>
            {!todoList.length ?
                <p style={{ textAlign: 'center' }}>No data to Display</p> :
                (<div>
                    <div className='dp-flex'>
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
                    {todoList.map((item, index) => {
                        let totalAmount = todoList.reduce(function (prev, current) {
                            return prev + +current.amount
                        }, 0);
                        let totalPrice= todoList.reduce(function (prev, current) {
                            return prev + +current.price_total
                        }, 0);
                        //console.log(totalAmount)
                        return (
                            <>
                            <div style={{position:'absolute', bottom:'0'}}>Amount Total: {totalAmount}, Total Price: {totalPrice}</div>
                                <div key={index} className='dp-flex'>
                                    <div>{index + 1}</div>
                                    <div>{item.code}</div>
                                    <div>{item.title}</div>
                                    <div>{item.stock}</div>
                                    <div>{item.location}</div>
                                    <div>{item.unit}</div>
                                    <div>{item.amount}</div>
                                    <div>{item.price_unit}</div>
                                    <div>{item.price_total}</div>

                                    {todoList ? (<>
                                        <button type='button' onClick={() => handleEdit(item)}>Edit</button>
                                        <button type='button' onClick={() => handleDelete(item)}>Delete</button>
                                    </>) : <></>}

                                </div>
                                
                            </>

                        );
                    })}

                </div>)
            }
        </article>
    );
}

const mapStateToProps = (state) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCode: (code) => dispatch(actionTypes.setCode(code)),
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setStock: (stock) => dispatch(actionTypes.setStock(stock)),
        setLocation: (location) => dispatch(actionTypes.setLocation(location)),
        setUnit: (unit) => dispatch(actionTypes.setUnit(unit)),
        setAmount: (amount) => dispatch(actionTypes.setAmount(amount)),
        setPriceUnit: (price_unit) => dispatch(actionTypes.setPriceUnit(price_unit)),
        setPriceTotal: (price_total) => dispatch(actionTypes.setPriceTotal(price_total)),

        setItem: (item) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);