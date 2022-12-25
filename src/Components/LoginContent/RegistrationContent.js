import { ThemeContext } from "@emotion/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function RegistrationContent(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();
  const [massage, setMassage] = useState("");
  const handleRegisterClick = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCz1vbiPZTd_XnqF93sfLFIFqFMl-yc5Oc",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        setMassage("success registration");
      } else {
        return res.json().then((data) => {
          setMassage(data.error.message);
        });
      }
    });
  };
  return (
    <div className={styles.Registration}>
      <div className={styles.container}>
        E-mail:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          require
        />
        <br />
        password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          require
        />
        <br />
        confirm password:{" "}
        <input
          type="password"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
          require
        />
        <br />
        <bottun onClick={() => handleRegisterClick()}>Register</bottun>
        <div className={styles.message}>{massage}</div>
        <p>
          you have an account? <Link to={`/LoginPage`}>Login Page</Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationContent;
