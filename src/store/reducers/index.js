import * as actionTypes from '../actions/actionTypes'

const initialState = {
    items: [],
    code: '',
    title: "",
    item: "",
    edit: false,
    error: "",
    //extendsion
    stock: "",
    location: '',
    unit: '',
    amount: '',
    price_unit: '',
    price_total: 0
}
const items = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newitem = {
                id: Date.now(),
                code: state.code,
                name: state.title,
                stock: state.stock,
                location: state.location,
                unit: state.unit,
                amount: state.amount,
                price_unit: state.price_unit,
                price_total: state.amount * state.price_unit
            }
            return {
                ...state,
                items: state.items.concat(newitem),
                code: '',
                title: "",
                stock: "",
                location: "",
                unit: "",
                amount: '',
                price_unit: '',
                price_total: 0,
                error: "",
            }

        case actionTypes.EDIT_ITEM:
            var newList = [...state.items];
            var index = newList.indexOf(state.item);
            if (index !== -1) {
                newList[index].code = state.code;
                newList[index].name = state.title;
                newList[index].stock = state.stock;
                newList[index].location = state.location;
                newList[index].unit = state.unit;
                newList[index].amount = state.amount;
                newList[index].price_unit = state.price_unit;
                newList[index].price_total = state.price_total;
                return {
                    ...state,
                    code: '',
                    title: "",
                    stock: "",
                    location: "",
                    unit: "",
                    amount: '',
                    price_unit: '',
                    price_total: 0,
                    edit: false,
                    items: newList,
                    error: ""
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.DELETE_ITEM:
            newList = [...state.items];
            index = newList.indexOf(state.item);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                    ...state,
                    items: newList
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        case actionTypes.SET_ITEM:
            return {
                ...state,
                item: action.item,
                error: ""
            }
        case actionTypes.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.SET_EDIT:
            return {
                ...state,
                edit: true,
                error: ""
            }

        //extension
        case actionTypes.SET_CODE:
            return {
                ...state,
                code: action.code
            }
        case actionTypes.SET_STOCK:
            return {
                ...state,
                stock: action.stock
            }
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.location
            }
        case actionTypes.SET_UNIT:
            return {
                ...state,
                unit: action.unit
            }
        case actionTypes.SET_AMOUNT:
            return {
                ...state,
                amount: action.amount
            }
        case actionTypes.SET_PRICE_UNIT:
            return {
                ...state,
                price_unit: action.price_unit
            }
        case actionTypes.SET_PRICE_TOTAL:
            return {
                ...state,
                price_total: action.amount * action.price_unit
            }

        default:
            return state;
    }
}

export default items;