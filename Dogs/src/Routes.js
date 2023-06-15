import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function Routes({ dogs }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
        <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
        <Redirect to="/dogs" />
      </Routes>
    </Router>
  );
}

export default Routes;
