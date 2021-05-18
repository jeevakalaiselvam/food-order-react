import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finesh fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "Amerian, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <ul>
                {DUMMY_MEALS.map((meal) => {
                    return (
                        <li>
                            <MealItem
                                name={meal.name}
                                id={meal.id}
                                description={meal.description}
                                price={meal.price}
                            />
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default AvailableMeals;
