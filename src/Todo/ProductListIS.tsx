import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

interface Form {
    todoList:string [], setCodeIS:any, setTitleIS:any, setStockIS:any, setItemIS:any, setEditIS:any, deleteItemIS:any, setLocationIS:any, setUnitIS:any, setAmountIS:any, setPriceUnitIS:any, setPriceTotalIS:any
}

function ProductListIS({ todoList, setCodeIS, setTitleIS, setStockIS, setItemIS, setEditIS, deleteItemIS, setLocationIS, setUnitIS, setAmountIS, setPriceUnitIS, setPriceTotalIS }:Form) {
    const handleEdit = (item:any) => {
        setCodeIS(item.code__is)
        setTitleIS(item.title__is);
        //extension
        setStockIS(item.stock);
        setLocationIS(item.location);
        setUnitIS(item.unit);
        setAmountIS(item.amount);
        setPriceUnitIS(item.price_unit);
        setPriceTotalIS(item.price_total);

        setEditIS();
        setItemIS(item);
    }

    const handleDelete = (item:any) => {
        setItemIS(item);
        deleteItemIS();
    }


    return (
        <article data-name='goods receive output' style={{ width: '74vw' }} className='overflow-y-scroll'>
            <button onClick={()=> window.location.reload()}>Discard</button>
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
                            return prev + +current.amount__is
                        }, 0);
                        let totalPrice= todoList.reduce((prev:any, current:any) => {
                            return prev + +current.price_total__is
                        }, 0);
                        //console.log(totalAmount)
                        return (
                            <>
                            <div style={{position:'absolute', bottom:'0'}}>Amount Total: {totalAmount}, Total Price: {totalPrice}</div>
                            
                                <div key={index} className='dp-flex'>
                                    <div>{index + 1}</div>
                                    <div>{item.code__is}</div>
                                    <div>{item.title__is}</div>
                                    <div>{item.stock__is}</div>
                                    <div>{item.location__is}</div>
                                    <div>{item.unit__is}</div>
                                    <div>{item.amount__is}</div>
                                    <div>{item.price_unit__is}</div>
                                    <div>{item.price_total__is}</div>

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
        todoList: state.items__is
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        setCodeIS: (code__is:string) => dispatch(actionTypes.setCodeIS(code__is)),
        setTitleIS: (title__is:string) => dispatch(actionTypes.setTitleIS(title__is)),
        setStockIS: (stock__is:string) => dispatch(actionTypes.setStockIS(stock__is)),
        setLocationIS: (location__is:string) => dispatch(actionTypes.setLocationIS(location__is)),
        setUnitIS: (unit__is:string) => dispatch(actionTypes.setUnitIS(unit__is)),
        setAmountIS: (amount__is:number) => dispatch(actionTypes.setAmountIS(amount__is)),
        setPriceUnitIS: (price_unit__is:number) => dispatch(actionTypes.setPriceUnitIS(price_unit__is)),
        setPriceTotalIS: (price_total__is:number) => dispatch(actionTypes.setPriceTotalIS(price_total__is)),

        setItemIS: (item__is:string []) => dispatch(actionTypes.setItemIS(item__is)),
        deleteItemIS: (item__is:string []) => dispatch(actionTypes.deleteItemIS(item__is)),
        setEditIS: () => dispatch(actionTypes.setEditIS())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListIS);