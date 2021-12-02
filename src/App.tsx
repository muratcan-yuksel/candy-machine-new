import React from "react";
import Button from "react-bootstrap/Button";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Examples from "./components/Examples";
import "./styles/app.css";

const App = () => {
  return (
    <div id="HomePage">
      <NavBar />
      <Landing />
      <About />
      <Examples />
    </div>
  );
};

export default App;
