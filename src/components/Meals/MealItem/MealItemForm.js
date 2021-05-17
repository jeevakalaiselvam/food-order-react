import classes from "./MealItemForm.module.css";
import React from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

export default function MealItemForm() {
    return (
        <form className={classes.form}>
            <Input
                input={{
                    type: "number",
                    min: "1",
                    max: "5",
                    defaultValue: "1",
                    step: "1",
                }}
                width="100px"
            />
            <Button width="100px">Add</Button>
        </form>
    );
}
