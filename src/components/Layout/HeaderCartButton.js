import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
    const context = useContext(CartContext);
    const [buttonHighlight, setButtonHighlight] = useState(false);

    const numberOfItems = context.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const { items } = context;

    const buttonClasses = buttonHighlight
        ? `${classes.button} ${classes.bump}`
        : `${classes.button}`;

    useEffect(() => {
        if (items.length === 0) return;
        setButtonHighlight(true);
        return () => {};
    }, [items]);

    return (
        <Button
            type={props.type}
            className={buttonClasses}
            width="200px"
            onClick={props.onClick}
        >
            <span className={classes.icon}>
                <i class="fas fa-shopping-cart"></i>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </Button>
    );
}
