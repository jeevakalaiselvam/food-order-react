import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
    return (
        <section className={classes.summary}>
            <h1>Delicious Food, Delivered to you</h1>
            <h3>
                Choose your favorite meal from out broad selection of available
                meals and enjoy a delicious lunch or dinner at home
            </h3>
            <h3>
                All out meals are cooked with high quality ingredients, just in
                time and of course by experienced chefs.
            </h3>
        </section>
    );
};

export default MealsSummary;
