import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import StylePage from "./pages/StylePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/styles">
          <StylePage />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
