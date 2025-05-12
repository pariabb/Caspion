import React from "react";
import styles from "./PageHeader.module.css";
import { Link } from "react-router-dom";
import PageHeaderImg from '/products/submarine.jpg'

const PageHeader = ({ title, breadcrumb }) => {
  const backgroundImage = PageHeaderImg; 

  return (
    <div
      className={styles.pageHeader}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>
          {breadcrumb ? (
            breadcrumb
          ) : (
            <>
              <Link to="/" className={styles.homeLink}>
                Home
              </Link>{" "}
              / {title}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
