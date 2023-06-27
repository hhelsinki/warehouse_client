import * as actionTypes from '../actions/actionTypes'

interface State {
    items: string [],
    code: string,
    title: string,
    item: string,
    edit: boolean,
    error: string,
    stock: string,
    location: string,
    unit: string,
    amount: any,
    price_unit: any,
    price_total: number,
    //issue stock
    items__is: string [],
    code__is: string,
    title__is: string,
    item__is: string,
    edit__is: boolean,
    error__is: string,
    stock__is: string,
    location__is: string,
    unit__is: string,
    amount__is: any,
    price_unit__is: any,
    price_total__is: number
}

const initialState: State = {
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
    price_total: 0,
    //issue stock
    items__is: [],
    code__is: '',
    title__is: "",
    item__is: "",
    edit__is: false,
    error__is: "",
    stock__is: "",
    location__is: '',
    unit__is: '',
    amount__is: '',
    price_unit__is: '',
    price_total__is: 0
}
const items = (state = initialState, action:any) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newitem:any = {
                id: Date.now(),
                code: state.code,
                title: state.title,
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
            var newList:any = [...state.items];
            var index = newList.indexOf(state.item);
            if (index !== -1) {
                newList[index].code = state.code;
                newList[index].title = state.title;
                newList[index].stock = state.stock;
                newList[index].location = state.location;
                newList[index].unit = state.unit;
                newList[index].amount = state.amount;
                newList[index].price_unit = state.price_unit;
                newList[index].price_total = (state.amount * state.price_unit) * 1;
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

        //issue
        case actionTypes.ADD_ITEM__IS:
            const newitemIS:any = {
                id__is: Date.now(),
                code__is: state.code__is,
                title__is: state.title__is,
                stock__is: state.stock__is,
                location__is: state.location__is,
                unit__is: state.unit__is,
                amount__is: state.amount__is,
                price_unit__is: state.price_unit__is,
                price_total__is: state.amount__is * state.price_unit__is
            }
            return {
                ...state,
                items__is: state.items__is.concat(newitemIS),
                code__is: '',
                title__is: "",
                stock__is: "",
                location__is: "",
                unit__is: "",
                amount__is: '',
                price_unit__is: '',
                price_total__is: 0,
                error__is: "",
            }

        case actionTypes.EDIT_ITEM__IS:
            var newList:any = [...state.items__is];
            var index = newList.indexOf(state.item__is);
            if (index !== -1) {
                newList[index].code__is = state.code__is;
                newList[index].title__is = state.title__is;
                newList[index].stock__is = state.stock__is;
                newList[index].location__is = state.location__is;
                newList[index].unit__is = state.unit__is;
                newList[index].amount__is = state.amount__is;
                newList[index].price_unit__is = state.price_unit__is;
                newList[index].price_total__is = (state.amount__is * state.price_unit__is) * 1;
                return {
                    ...state,
                    code__is: '',
                    title__is: "",
                    stock__is: "",
                    location__is: "",
                    unit__is: "",
                    amount__is: '',
                    price_unit__is: '',
                    price_total__is: 0,
                    edit__is: false,
                    items__is: newList,
                    error__is: ""
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.DELETE_ITEM__IS:
            newList = [...state.items__is];
            index = newList.indexOf(state.item__is);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                    ...state,
                    items__is: newList
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.SET_TITLE__IS:
            return {
                ...state,
                title__is: action.title__is
            }
        case actionTypes.SET_ITEM__IS:
            return {
                ...state,
                item__is: action.item__is,
                error__is: ""
            }
        case actionTypes.SET_ERROR__IS:
            return {
                ...state,
                error__is: action.error__is
            }
        case actionTypes.SET_EDIT__IS:
            return {
                ...state,
                edit__is: true,
                error__is: ""
            }
        case actionTypes.SET_CODE__IS:
            return {
                ...state,
                code__is: action.code__is
            }
        case actionTypes.SET_STOCK__IS:
            return {
                ...state,
                stock__is: action.stock__is
            }
        case actionTypes.SET_LOCATION__IS:
            return {
                ...state,
                location__is: action.location__is
            }
        case actionTypes.SET_UNIT__IS:
            return {
                ...state,
                unit__is: action.unit__is
            }
        case actionTypes.SET_AMOUNT__IS:
            return {
                ...state,
                amount__is: action.amount__is
            }
        case actionTypes.SET_PRICE_UNIT__IS:
            return {
                ...state,
                price_unit__is: action.price_unit__is
            }
        case actionTypes.SET_PRICE_TOTAL__IS:
            return {
                ...state,
                price_total__is: action.amount__is * action.price_unit__is
            }

        default:
            return state;
    }
}

export default items;