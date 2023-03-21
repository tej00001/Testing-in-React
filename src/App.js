import "./App.css";
import React from "react";
import Greeting from "./components/Greeting";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
