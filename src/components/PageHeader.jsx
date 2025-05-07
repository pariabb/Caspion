import React from "react";
import styles from "./PageHeader.module.css";
import { Link } from "react-router-dom";

const PageHeader = ({ title, backgroundImage }) => {
  return (
    <div
      className={styles.pageHeader}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          <Link to="/" className={styles.homeLink}>
            Home
          </Link>{" "}
          / {title}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
