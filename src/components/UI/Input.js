import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
    return (
        <div className={classes.input}>
            <input {...props.input} style={{ width: props.width }} />
        </div>
    );
}
