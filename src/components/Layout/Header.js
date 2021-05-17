import React, { Fragment, useRef } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/background.jpeg";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";
import AvailableMeals from "../Meals/AvailableMeals";

const mealsImageURL =
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80";

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes["header"]}>
                <h1>Meal Center</h1>
                <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div className={classes["main-image"]}>
                <div className={classes["main-image-inner"]}>
                    <MealsSummary />
                </div>
            </div>
        </Fragment>
    );
}
