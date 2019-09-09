import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { App } from "./components/App";
import { BaseLayout } from "./components/BaseLayout";
import { MovieDetails } from "./components/MovieDetails";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/movie-details" component={MovieDetails} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
