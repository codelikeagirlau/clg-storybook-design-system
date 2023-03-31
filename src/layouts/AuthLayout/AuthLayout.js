import React from "react";
import Logo from "../../components/Logo/Logo";
import Greeting from "../../components/Greeting/Greeting";
import * as styles from "./AuthLayout.module.scss";
// import "./AuthLayout.scss";

const AuthLayout = ({ heading, children, logoSrc, logoAlt }) => {
  return (
    <div className={styles.authLayout}>
      <header className={styles.authHeader}>
        <div className={styles.authHeaderWrapper}>
          <Greeting greeting_text="Hi! Welcome!" />
          <Logo src={logoSrc} alt={logoAlt} />
          <h1 className={styles.authHeading}>{heading}</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};
export default AuthLayout;
