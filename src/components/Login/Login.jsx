import React, { useState } from "react";
import "./Login.css";

const Login = ({ onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={emailHandler}
        value={email}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={passwordHandler}
        value={password}
      />
      <button>Login</button>

      <p>
        If you are not registered,{" "}
        <strong onClick={onSwitch()}>register now.</strong>{" "}
      </p>
    </div>
  );
};

export default Login;
