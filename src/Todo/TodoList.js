import {connect} from 'react-redux';
import * as actionTypes from '../store/actions'

function TodoList({todoList, setTitle, setStock, setItem, setEdit, deleteItem, setLocation, setUnit, setAmount, setPriceUnit, setPriceTotal }) {
    const handleEdit = (item) => {
        setTitle(item.value);
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

    return(
        <article data-name='goods receive output' style={{width:'70vw'}}>
            {!todoList.length ? 
            <p style={{textAlign:'center'}}>No data to Display</p> : 
            (<div>
                {todoList.map((item) => {
                    return (
                       <div key={item.id} style={{width:'400px', margin:'0 auto'}}>
                        {item.code} {item.name} {item.stock} {item.location} {item.unit} {item.amount} {item.price_unit} {item.price_total}

                        {todoList ? (<>
                            <button type='button' onClick={()=> handleEdit(item)}>Edit</button>
                        <button type='button' onClick={()=> handleDelete(item)}>Delete</button>
                        </>) : <></>}
                        

                       </div>
                    );
                })}

            </div>)
            }
        </article>
    );
}

const mapStateToProps = (state) => {
    return{
        todoList: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);