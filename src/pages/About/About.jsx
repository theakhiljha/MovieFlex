import React from "react";
import styles from "./About.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Navbar className={styles.navbar} user={props.user} />
      <div className={styles.headingComponent}>
        <h1 className={styles.pageTitle}>About MovieFlex</h1>
        <h2 className={styles.pageDiscription}>
          A web application designed using react through which users can create
          their account and check for recommendations and reviews of movies & tv
          series.
          <br />
          <br />
          <strong>Minor Project</strong> for Semester - <b>V</b>
          <br />
          <b>Group</b> - BT5106
          <br />
          <br />
          <h1>Team Members:</h1>
          <br />
          Akhil Kumar Jha - 19SCSE1010765 <br />
          Rajat Ranjan - 18SCSE1010008 <br />
          P. Aakanksha Priya - 18SCS1010708 <br />
        </h2>
      </div>
      <div className={styles.about}>
        <p></p>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default About;
