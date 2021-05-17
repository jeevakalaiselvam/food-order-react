import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
    return (
        <div className={classes.buttonc}>
            <button
                {...props.button}
                className={classes.button}
                style={{ width: props.width }}
            >
                {props.children}
            </button>
        </div>
    );
}
