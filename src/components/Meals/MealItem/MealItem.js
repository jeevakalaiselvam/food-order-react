import React, { Fragment } from "react";
import Card from "../../UI/Card";
import classes from "./MealItem.module.css";

export default function MealItem(props) {
    const meal = props.meal;
    return (
        <Fragment>
            <Card className={classes.mealcard}>
                <h1 className={classes.name}>{meal.name}</h1>
                <h4 className={classes.description}>{meal.description}</h4>
                <h3 className={classes.price}>${`${meal.price.toFixed(2)}`}</h3>
            </Card>
        </Fragment>
    );
}
