import { Button } from "@material-ui/core";
import React, { ReactElement } from "react";
import "./App.css";

export const App = (): ReactElement => {
  return (
    <div className="App">
      <h1>Šmoulla's counter</h1>
      <Button>Date Range</Button>
      <Button>People's Age</Button>
    </div>
  );
};
