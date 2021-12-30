import logo from "./logo.svg";
// import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import { Fragment } from "react/cjs/react.production.min";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/about" exact>
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/Projects">
            <Projects></Projects>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
