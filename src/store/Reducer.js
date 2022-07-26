export const reducer = (state, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":
            return{...state, cart:[...state.cart, {...action.payload, qty: 1}]}
        case "REMOVE_FROM_CART":
            return{...state, cart: state.cart.filter((c)=>{
                return c.id !== action.payload.id
            })} 
        case "CHANGE_QTY":
            return{...state, cart: state.cart.filter((item)=> item.id === action.payload.id ? item.qty = action.payload.qty: item.qty)}
        default:
            return state;
    }
}


export const filterReducer = (state, action)=>{
    switch (action.type) {
        case "SORT_BY_PRICE":
            return {...state, sort: action.payload}
        case "FILTER_BY_STOCK":
            return {...state, byStock: !state.byStock}
        case "FILTER_BY_DELIVER":
            return {...state, byFastDeliver: !state.byFastDeliver}
        case "SEARCH":
            return {...state, searchQuery: action.payload}
        case "CLEAR_FILTERS":
            return{
                byStock: false,
                byFastDeliver: false,
                searchQuery: ""
            }
    
        default:
            return state;
    }
}