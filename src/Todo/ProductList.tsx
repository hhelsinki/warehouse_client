import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

interface List {
    todoList:string [], setCode:any, setTitle:any, setStock:any, setItem:any, setEdit:any, deleteItem:any, setLocation:any, setUnit:any, setAmount:any, setPriceUnit:any, setPriceTotal:any
}

function ProductList({ todoList, setCode, setTitle, setStock, setItem, setEdit, deleteItem, setLocation, setUnit, setAmount, setPriceUnit, setPriceTotal }: List) {
    
    const handleEdit = (item: any) => {
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

    const handleDelete = (item:any) => {
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
                    {todoList.map((item:any, index:number) => {
                        let totalAmount = todoList.reduce((prev:any, current:any) => {
                            return prev + + current.amount
                        }, 0);
                        let totalPrice= todoList.reduce((prev:any, current:any) => {
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

const mapStateToProps = (state:any) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setCode: (code:string) => dispatch(actionTypes.setCode(code)),
        setTitle: (title:string) => dispatch(actionTypes.setTitle(title)),
        setStock: (stock:string) => dispatch(actionTypes.setStock(stock)),
        setLocation: (location:string) => dispatch(actionTypes.setLocation(location)),
        setUnit: (unit:string) => dispatch(actionTypes.setUnit(unit)),
        setAmount: (amount:number) => dispatch(actionTypes.setAmount(amount)),
        setPriceUnit: (price_unit:number) => dispatch(actionTypes.setPriceUnit(price_unit)),
        setPriceTotal: (price_total:number) => dispatch(actionTypes.setPriceTotal(price_total)),

        setItem: (item:string []) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item:string []) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);