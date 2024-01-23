import React, { useState } from "react";
import Login from "../components/Login/Login";
import "./LoginRegister.css";
import Register from "../components/Register/Register";

const LoginRegister = () => {
  const [isLogged, setIsLogged] = useState(false);

  const switchToLogin = () => {
    setIsLogged((prevState) => !prevState);
  };

  return (
    <div>
      <div className="loginregister">
        {!isLogged ? (
          <Login onSwitch={switchToLogin} />
        ) : (
          <Register onSwitch={switchToLogin} />
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
