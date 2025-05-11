import React from "react";
import styles from "./PageHeader.module.css";
import { Link } from "react-router-dom";

const PageHeader = ({ title, breadcrumb }) => {
  const backgroundImage = "https://nsc.anu.edu.au/sites/default/files/styles/hero/public/2024-06/Underseacables_Adobe%20stock.jpg?itok=dRYBBzsy"; 

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
