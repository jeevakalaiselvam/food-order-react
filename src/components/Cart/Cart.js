import React from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

export default function Cart() {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
                (item) => {
                    return <li>{item.name}</li>;
                }
            )}
        </ul>
    );

    return (
        <Modal>
            <Button width="40px">
                <i class="fas fa-times-circle"></i>
            </Button>
            <br />
            {cartItems}
            <div className={classes.total}>
                <h1 className={classes.center}>Total Amount</h1>
                <h2 className={classes.center}>35.62</h2>
            </div>
            <div className={classes.action}>
                <Button width="100px">Order</Button>
            </div>
        </Modal>
    );
}
