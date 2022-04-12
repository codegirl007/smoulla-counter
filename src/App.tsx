import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import { DateRange } from "./components/DateRange/DateRange";
import { PeopleAge } from "./components/PeopleAge/PeopleAge";

export const App = (): ReactElement => {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Šmoulla's counter</h1>
        <header>
          <nav className="navigace">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "activeStyle" : undefined
              }
            >
              Date Range
            </NavLink>
            <NavLink
              to="/age"
              className={({ isActive }) =>
                isActive ? "activeStyle" : undefined
              }
            >
              People's Age
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<DateRange />} />
            <Route path="/age" element={<PeopleAge />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
