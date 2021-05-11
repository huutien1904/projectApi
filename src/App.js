import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
// import ProductList from "./components/ProductList/ProductList";
import routes from "./routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu></Menu>
          <div className="container">
            <div className="row">{this.showContentsMenu(routes)}</div>
          </div>
        </div>
      </Router>
    );
  }

  showContentsMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            path={route.path}
            key={index}
            component={route.main}
            exact={route.exact}
          ></Route>
        );
      });
    }

    return <Switch>{result}</Switch>;
  };
}

export default App;
