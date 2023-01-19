export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            action.payload.quantity = 1
            action.payload.amount = +(action.payload.amount)
            action.payload.total = action.payload.quantity * action.payload.amount
            return [
                ...state,
                action.payload
            ]

        case 'REMOVE_PRODUCT':
            const removeOrder = state.filter(
                (item) => item.id !== action.payload.id
            )
            return removeOrder

        case "DECREASE":
            const decrement = state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                        total: item.total - item.amount

                    };
                } else {
                    return item;
                }
            });
            return decrement;

        case "INCREASE":
            const increment = state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        // total: item.quantity * item.amount
                        total: item.total + item.amount
                    }
                } else {
                    return item
                }

            }); 
            return increment;

        case "TOTAL_PRICE":
            const totalPrice = state.map((item)=>{
                return item.quantity * item.amount
            });
            return totalPrice;

        default:
            throw new Error(`No case for type ${action.type} found in cartReducer.`);
    }
}