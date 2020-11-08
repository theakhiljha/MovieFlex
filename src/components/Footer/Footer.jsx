import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to="/" className={styles.logo}>
        {" "}
        MovieFlex{" "}
      </Link>
      <div className={styles.navContainer}>
        <Link className={styles.navLinks} to="/about">
          About
        </Link>
        <span className={styles.navLinks}>Contact</span>
      </div>
      <span className={styles.credit}>
        Built with <span className="material-icons">favorite</span> by
        Group-BT5106
      </span>
      <span className={styles.credit}>
        <p>
          <h2>Team Members:</h2>
          <br />
          <br />
          Akhil Kumar Jha
          <br />
          Rajat Ranjan
          <br />
          P. Aakanksha Priya
        </p>
      </span>
    </div>
  );
};

export default Footer;
