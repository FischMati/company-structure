import {mount} from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  mount(<App />);
});
