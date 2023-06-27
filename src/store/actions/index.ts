import * as actionTypes from './actionTypes'

export const addItem = () => {
    return{ 
        type: actionTypes.ADD_ITEM, 
    }
}
export const addItemIS = () => {
    return{ 
        type: actionTypes.ADD_ITEM__IS, 
    }
}

export const deleteItem = (item: string []) => {
    return{ 
        type: actionTypes.DELETE_ITEM, 
        item: item 
    }
}
export const deleteItemIS = (item: string []) => {
    return{ 
        type: actionTypes.DELETE_ITEM__IS, 
        item__is: item 
    }
}

export const editItem = (item: string []) => {
    return{ 
        type: actionTypes.EDIT_ITEM, 
        item: item
        }
}
export const editItemIS = (item:string []) => {
    return{ 
        type: actionTypes.EDIT_ITEM__IS, 
        item__is: item
        }
}

export const setTitle = (title:string) => {
    return{ 
        type: actionTypes.SET_TITLE, 
        title: title 
    }
}
export const setTitleIS = (title:string) => {
    return{ 
        type: actionTypes.SET_TITLE__IS, 
        title__is: title 
    }
}
export const setError = (error:string) => {
    return{ 
        type: actionTypes.SET_ERROR, 
        error: error 
    }
}
export const setErrorIS = (error:string) => {
    return{ 
        type: actionTypes.SET_ERROR__IS, 
        error__is: error 
    }
}
export const setItem = (item:string []) => {
    return{ 
        type: actionTypes.SET_ITEM, 
        item: item 
    }
}
export const setItemIS = (item:string []) => {
    return{ 
        type: actionTypes.SET_ITEM__IS, 
        item__is: item 
    }
}
export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}
export const setEditIS = () => {
    return{ 
        type: actionTypes.SET_EDIT__IS
    }
}

//extension
export const setCode = (code:string) => {
    return{ 
        type: actionTypes.SET_CODE, 
        code: code 
    }
}
export const setStock = (stock:string) => {
    return{ 
        type: actionTypes.SET_STOCK, 
        stock: stock 
    }
}
export const setLocation = (location:string) => {
    return{ 
        type: actionTypes.SET_LOCATION, 
        location: location 
    }
}
export const setUnit = (unit:string) => {
    return{ 
        type: actionTypes.SET_UNIT, 
        unit: unit 
    }
}
export const setAmount = (amount:number) => {
    return{ 
        type: actionTypes.SET_AMOUNT, 
        amount: amount 
    }
}
export const setPriceUnit = (price_unit:number) => {
    return{ 
        type: actionTypes.SET_PRICE_UNIT, 
        price_unit: price_unit 
    }
}
export const setPriceTotal = (price_total:number) => {
    return{ 
        type: actionTypes.SET_PRICE_TOTAL, 
        price_total: price_total 
    }
}

export const setCodeIS = (code:string) => {
    return{ 
        type: actionTypes.SET_CODE__IS, 
        code__is: code 
    }
}
export const setStockIS = (stock:string) => {
    return{ 
        type: actionTypes.SET_STOCK__IS, 
        stock__is: stock 
    }
}
export const setLocationIS = (location:string) => {
    return{ 
        type: actionTypes.SET_LOCATION__IS, 
        location__is: location 
    }
}
export const setUnitIS = (unit:string) => {
    return{ 
        type: actionTypes.SET_UNIT__IS, 
        unit__is: unit 
    }
}
export const setAmountIS = (amount:number) => {
    return{ 
        type: actionTypes.SET_AMOUNT__IS, 
        amount__is: amount 
    }
}
export const setPriceUnitIS = (price_unit:number) => {
    return{ 
        type: actionTypes.SET_PRICE_UNIT__IS, 
        price_unit__is: price_unit 
    }
}
export const setPriceTotalIS = (price_total:number) => {
    return{ 
        type: actionTypes.SET_PRICE_TOTAL__IS, 
        price_total__is: price_total
    }
}