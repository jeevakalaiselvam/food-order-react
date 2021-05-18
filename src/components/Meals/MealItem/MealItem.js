import React, { Fragment, useContext } from "react";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount,
        });
    };

    return (
        <Fragment>
            <Card className={classes.mealcard}>
                <h1 className={classes.name}>{props.name}</h1>
                <h4 className={classes.description}>{props.description}</h4>
                <h3 className={classes.price}>
                    ${`${props.price.toFixed(2)}`}
                </h3>
                <MealItemForm onAddToCart={addToCartHandler} />
            </Card>
        </Fragment>
    );
}
