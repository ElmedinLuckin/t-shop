import React, { useState } from "react";
import "./Register.css";

const Register = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={emailHandler}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={passwordHandler}
      />
      <button>Register</button>

      <button onClick={onSwitch}>Switch to Login</button>
    </div>
  );
};

export default Register;
