import { Fragment } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
    return (
        <Fragment className=".App">
            <Cart />
            <Header />
            <AvailableMeals />
        </Fragment>
    );
}

export default App;
