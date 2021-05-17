import React, { Fragment } from "react";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
    return (
        <button type={props.type} className={classes.button}>
            <span className={classes.icon}>
                <i class="fas fa-shopping-cart"></i>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}
