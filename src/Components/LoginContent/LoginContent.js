import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Store/AuthContext";
import styles from "./Login.module.css";

function LoginContent(props) {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [massage, setMassage] = useState("");
  const authContext = useContext(AuthContext);
  const handleLoginClick = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCz1vbiPZTd_XnqF93sfLFIFqFMl-yc5Oc",
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
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        authContext.login(data.idToken);
        Navigate("/");
      })
      .catch((err) => {
        setMassage(err.message);
      });
  };
  return (
    <div className={styles.Login}>
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
        <bottun onClick={() => handleLoginClick()}>Login</bottun>
        <div className={styles.message}>{massage}</div>
        <p>
          you don't have an account?{" "}
          <Link to={`/RegistrationPage`}>Registration Page</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginContent;
