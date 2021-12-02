import React from "react";
import Button from "react-bootstrap/Button";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Examples from "./components/Examples";
import MiddlePart from "./components/MiddlePart";
import Roadmap from "./components/Roadmap";
import FillerImages from "./components/FillerImages";
import FAQ from "./components/FAQ";
import Creator from "./components/Creator";
import Signup from "./components/Signup";
import "./styles/app.css";

const App = () => {
  return (
    <div id="HomePage">
      <NavBar />
      <Landing />
      <About />
      <Examples />
      <MiddlePart />
      <Examples />
      <Roadmap />
      <FillerImages />
      <FAQ />
      <Creator />
      <Signup />
    </div>
  );
};

export default App;
