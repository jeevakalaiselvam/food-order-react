import React from "react";
import Button from "../UI/Button";
import classes from "./CartItem.module.css";

export default function CartItem(props) {
    const price = `$${props.price}`;

    return (
        <div className={classes["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.container}>
                    <div className={classes.summary}>
                        <h3 className={classes.price}>{price}</h3>
                        <h3 className={classes.amount}>x{props.amount}</h3>
                    </div>

                    <div className={classes.action}>
                        <Button
                            onClick={props.onRemove}
                            className={classes.btn}
                        >
                            -
                        </Button>
                        <Button onClick={props.onAdd} className={classes.btn}>
                            +
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
