// import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";


const Header = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.adidasImages}>
       <p className={styles.text}>Calvin klein</p>
        </div>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/catalog" className={styles.link}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Header;
