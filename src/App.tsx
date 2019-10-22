import React from "react";
import "./App.css";
import EmployeeTreeitem from "./Components/EmployeeTreeItem";

const App: React.FC = () => {
  return (
    <div className="App">
      <EmployeeTreeitem employee={{id: 0, first: "Matias", last: "Fischer", manager: 0}}/>
    </div>
  );
};

export default App;
