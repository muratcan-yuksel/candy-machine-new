import React from "react";
import Button from "react-bootstrap/Button";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import About from "./components/About";
import "./styles/app.css";

const App = () => {
  return (
    <div id="HomePage">
      <NavBar />
      <Landing />
      <About />
    </div>
  );
};

export default App;
