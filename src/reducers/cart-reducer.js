
const GROCERY_ITEMS = [
    {name: "Sliced bacon", price: 2.56},
    {name: "Past", price:3.12},
    {name: "Dried beans", price:3.15},
    {name: "Ground beef", price:5.14},
    {name: "All-purpose flour", price: 2.56},
    {name: "Creamy peanut butter", price:3.12},
    {name: "Potatos", price:3.15},
    {name: "Frozen turkey", price:5.14},
    {name: "Sirloin steak", price: 2.56},
    {name: "White rice", price:3.12},
    {name: "Chocolate chip cookies", price:3.15},
    {name: "Sugar", price:5.14}
]

const cartReducer = (state,action) => {
    if(state===undefined){
        return {
            forSale:GROCERY_ITEMS,
            cart :[],
        }
    }

    //ACTIONS
    switch(action.type){
        case 'ADD_TO_CART' :{
            const cart = [...state.cart,action.item]
            return {
                ...state,
                cart,
            }
        }
        case 'REMOVE_FROM_CART' :{
            const cart=[...state.cart]
            cart.splice(action.index,1)
            return {
                ...state,
                cart,
        }
    }
        default:{
            return state ;
        }
    }
}
export default cartReducer;