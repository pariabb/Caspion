import React from "react";
import styles from "./PageHeader.module.css";
import { Link } from "react-router-dom";
import PageHeaderImg from '/products/submarine.jpg'
import { useTranslation } from "react-i18next";

const PageHeader = ({ title, breadcrumb }) => {
  const backgroundImage = PageHeaderImg;

  const { t } = useTranslation();

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
                 { t('header.menu1')}
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
