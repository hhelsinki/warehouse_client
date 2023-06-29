import { connect } from 'react-redux';
import * as actionTypes from '../store/actions'

interface List {
    todoList: string[], setCode: any, setTitle: any, setStock: any, setItem: any, setEdit: any, deleteItem: any, setLocation: any, setUnit: any, setAmount: any, setPriceUnit: any, setPriceTotal: any
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

    const handleDelete = (item: any) => {
        setItem(item);
        deleteItem();
    }

    //console.log(todoList)

    return (
        <article data-name='goods receive output' className='gr__insert-display overflow-y-scroll'>
            {!todoList.length ?
                <p className='text-center'>No data to Display</p> :
                (<div>
                    <div className='flex gr__list bg-prim'>
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
                    {todoList.map((item: any, index: number) => {
                        let totalAmount = todoList.reduce((prev: any, current: any) => {
                            return prev + + current.amount
                        }, 0);
                        let totalPrice = todoList.reduce((prev: any, current: any) => {
                            return prev + +current.price_total
                        }, 0);
                        //console.log(totalAmount)
                        return (
                            <>
                                <div className="gr__total">รวมจำนวน: {totalAmount.toLocaleString()} | เงิน: {totalPrice.toLocaleString()}</div>
                                <div key={index} className='flex gr__list'>
                                    <div>{index + 1}</div>
                                    <div>{item.code}</div>
                                    <div>{item.title.substring(0, 22)}{item.title.length >= 22 && '...'}</div>
                                    <div>{item.stock}</div>
                                    <div>{item.location}</div>
                                    <div>{item.unit}</div>
                                    <div className="text-right">{item.amount.toLocaleString()}</div>
                                    <div className="text-right">{item.price_unit.toLocaleString()}</div>
                                    <div className="text-right">{item.price_total.toLocaleString()}</div>

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

const mapStateToProps = (state: any) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setCode: (code: string) => dispatch(actionTypes.setCode(code)),
        setTitle: (title: string) => dispatch(actionTypes.setTitle(title)),
        setStock: (stock: string) => dispatch(actionTypes.setStock(stock)),
        setLocation: (location: string) => dispatch(actionTypes.setLocation(location)),
        setUnit: (unit: string) => dispatch(actionTypes.setUnit(unit)),
        setAmount: (amount: number) => dispatch(actionTypes.setAmount(amount)),
        setPriceUnit: (price_unit: number) => dispatch(actionTypes.setPriceUnit(price_unit)),
        setPriceTotal: (price_total: number) => dispatch(actionTypes.setPriceTotal(price_total)),

        setItem: (item: string[]) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item: string[]) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);