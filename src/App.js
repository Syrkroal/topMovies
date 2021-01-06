import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieDetail from "./MovieDetail/MovieDetail";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/details" component={MovieDetail} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
