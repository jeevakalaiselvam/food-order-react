import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes["header"]}>
                <h1>Meal Center</h1>
                <HeaderCartButton onClick={props.onShowCart}>
                    Cart
                </HeaderCartButton>
            </header>
            <div className={classes["main-image"]}>
                <div className={classes["main-image-inner"]}>
                    <MealsSummary />
                </div>
            </div>
        </Fragment>
    );
}
