// Data Layer
export const initialState = {
    basket: [],
};

// Selector.. calculate the total value amount of items in a basket
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action ) => {
    console.log(action);

    switch(action.type) {
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            // get the item index and check if it in the basket, if not warn, then if true remove the item from the basket
           const index = state.basket.findIndex(
               (basketItem) => basketItem.id === action.id
           );
           //  items in a basket
           let newBasket = [...state.basket];

           // remove each item in an array
           if (index >= 0) {
               newBasket.splice(index, 1);

           } else {
               console.warn (
                   `Cant remove product (id: ${action.id}) as its not in the basket!`
                   )
            }
           

           return {
               ...state, 
               basket: newBasket
           }
            
        default:
            return state;

    }
};

export default reducer;