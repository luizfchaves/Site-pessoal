import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import StylePage from "./pages/StylePage";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/styles">
            <StylePage />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
