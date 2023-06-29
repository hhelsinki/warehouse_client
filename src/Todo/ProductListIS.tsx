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
        <article data-name='goods receive output' className='gr__insert-display overflow-y-scroll'>
            {!todoList.length ?
                <p className='text-center'>No data to Display</p> :
                (<div>
                    <div className='flex gr__list bg-prim bg-prim'>
                        <div className='text-center'>No.</div>
                        <div className='text-center'>รหัสสินค้า</div>
                        <div className='text-center'>ชื่อสินค้า</div>
                        <div className='text-center'>คลัง</div>
                        <div className='text-center'>ที่เก็บ</div>
                        <div className='text-center'>หน่วยนับ</div>
                        <div className='text-center'>จำนวน</div>
                        <div className='text-center'>ราคา/หน่วย</div>
                        <div className='text-center'>จำนวนเงิน</div>
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
                            <div className="gr__total">รวมจำนวน: {totalAmount} | เงิน: {totalPrice}</div>
                                <div key={index} className='flex gr__list'>
                                    <div>{index + 1}</div>
                                    <div>{item.code__is}</div>
                                    <div>{item.title__is.substring(0, 22)}{item.title__is.length >= 22 && '...'}</div>
                                    <div>{item.stock__is}</div>
                                    <div>{item.location__is}</div>
                                    <div>{item.unit__is}</div>
                                    <div className="text-right">{item.amount__is.toLocaleString()}</div>
                                    <div className="text-right">{item.price_unit__is.toLocaleString()}</div>
                                    <div className="text-right">{item.price_total__is.toLocaleString()}</div>

                                    {todoList ? (<>
                                        <button type='button' onClick={() => handleEdit(item)} className='butt-edit border-0'>Edit</button>
                                        <button type='button' onClick={() => handleDelete(item)} className='butt-del col-white border-0'>Delete</button>
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