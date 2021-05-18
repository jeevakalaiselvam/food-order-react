import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItems;

            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                };

                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }

            const updatedTotalAmount =
                state.totalAmount + action.item.price * action.item.amount;
            return { items: updatedItems, totalAmount: updatedTotalAmount };

        case "REMOVE":
            const alreadyExistingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );
            const existingItem = state.items[alreadyExistingCartItemIndex];
            const updatedNewTotalAmount =
                state.totalAmount - existingItem.price;

            let newUpdatedItems;
            if (existingItem.amount === 1) {
                newUpdatedItems = state.items.filter(
                    (item) => item.id !== action.id
                );
            } else {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount - 1,
                };
                newUpdatedItems = [...state.items];
                newUpdatedItems[alreadyExistingCartItemIndex] = updatedItem;
            }

            return {
                items: newUpdatedItems,
                totalAmount: updatedNewTotalAmount,
            };

        default:
            return state;
    }
};

export default function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
