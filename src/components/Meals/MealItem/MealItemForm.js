import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

export default function MealItemForm(props) {
    const [amountValid, setAmountValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enterAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enterAmountNumber < 1 ||
            enterAmountNumber > 5
        ) {
            setAmountValid(false);
            return;
        }

        props.onAddToCart(enterAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                input={{
                    type: "number",
                    min: "1",
                    max: "5",
                    defaultValue: "1",
                    step: "1",
                }}
                width="100px"
            />
            <Button width="100px" type="submit">
                Add
            </Button>
            {!amountValid && <p>Please enter a valid amount</p>}
        </form>
    );
}
