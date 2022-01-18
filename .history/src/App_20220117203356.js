import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Asteroids - NeoWs</Link>
                </header>

                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/recipe/:recipeId" component={Recipe} />
                        <Route path="/timer" component={Timer} />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;