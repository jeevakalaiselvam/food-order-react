import React from "react";
import classes from "./Button.module.css";

export default function Button(props) {
    return (
        <div className={classes.buttonc}>
            <button
                {...props.button}
                className={`${classes.button} ${props.className}`}
                style={{ width: props.width }}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </div>
    );
}
