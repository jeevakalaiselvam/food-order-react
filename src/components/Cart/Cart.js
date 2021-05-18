import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

export default function Cart(props) {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartContext.addItem({ ...item, amount: 1 });
    };

    const cartItems = (
        <div className={classes["cart-items"]}>
            {cartContext.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                );
            })}
        </div>
    );

    return (
        <Modal onClose={props.onClose}>
            <Button width="40px" onClick={props.onClose}>
                <i class="fas fa-times-circle"></i>
            </Button>
            <h1 className={classes.center}>Your Cart</h1>
            <br />
            <div className={classes.center}>{cartItems}</div>
            <div className={classes.total}>
                <h1 className={classes.center}>Total Amount</h1>
                <h2 className={classes.center}>{totalAmount}</h2>
            </div>
            {hasItems && (
                <div className={classes.action}>
                    <Button width="100px">Order</Button>
                </div>
            )}
        </Modal>
    );
}
