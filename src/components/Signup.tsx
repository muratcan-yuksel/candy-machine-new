import React from "react";
import { Button } from "react-bootstrap";
import "../styles/signup.css";

const Signup = () => {
  return (
    <div id="signUpDiv">
      <h1>Title</h1>
      <p>-lorem ipsum dolor sit amet</p>
      <p>dolor ipsum</p>
      <p>dolor ipsum</p>
      <div id="signupForm">
        <input className="signupItem" type="text" placeholder="email address" />
        <Button className="signupItem" variant="warning">
          Warning
        </Button>{" "}
      </div>
    </div>
  );
};

export default Signup;
