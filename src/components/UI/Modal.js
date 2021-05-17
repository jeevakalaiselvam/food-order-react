import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modeal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

export default function Modal() {
    const portalElement = document.getElementById("overlays");
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
}
