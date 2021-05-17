import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {
    return (
        <Button type={props.type} className={classes.button} width="200px">
            <span className={classes.icon}>
                <i class="fas fa-shopping-cart"></i>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </Button>
    );
}
