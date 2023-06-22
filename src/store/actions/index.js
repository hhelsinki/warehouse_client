import * as actionTypes from './actionTypes'

export const addItem = () => {
    return{ 
        type: actionTypes.ADD_ITEM, 
    }
}

export const deleteItem = (item) => {
    return{ 
        type: actionTypes.DELETE_ITEM, 
        item: item 
    }
}

export const editItem = (item) => {
    return{ 
        type: actionTypes.EDIT_ITEM, 
        item: item
        }
}
export const setTitle = (title) => {
    return{ 
        type: actionTypes.SET_TITLE, 
        title: title 
    }
}
export const setError = (error) => {
    return{ 
        type: actionTypes.SET_ERROR, 
        error: error 
    }
}
export const setItem = (item) => {
    return{ 
        type: actionTypes.SET_ITEM, 
        item: item 
    }
}
export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}

//extension
export const setCode = (code) => {
    return{ 
        type: actionTypes.SET_CODE, 
        code: code 
    }
}
export const setStock = (stock) => {
    return{ 
        type: actionTypes.SET_STOCK, 
        stock: stock 
    }
}
export const setLocation = (location) => {
    return{ 
        type: actionTypes.SET_LOCATION, 
        location: location 
    }
}
export const setUnit = (unit) => {
    return{ 
        type: actionTypes.SET_UNIT, 
        unit: unit 
    }
}
export const setAmount = (amount) => {
    return{ 
        type: actionTypes.SET_AMOUNT, 
        amount: amount 
    }
}
export const setPriceUnit = (price_unit) => {
    return{ 
        type: actionTypes.SET_PRICE_UNIT, 
        price_unit: price_unit 
    }
}
export const setPriceTotal = (price_total) => {
    return{ 
        type: actionTypes.SET_PRICE_TOTAL, 
        price_total: price_total 
    }
}