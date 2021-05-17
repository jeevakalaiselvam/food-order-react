import { Fragment } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
    return (
        <Fragment className=".App">
            <Header />
            <AvailableMeals />
        </Fragment>
    );
}

export default App;
