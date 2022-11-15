import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import notFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeid" component={App}/>
      <Route component={notFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;