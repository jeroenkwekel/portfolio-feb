import React, { Component } from "react";
import styles from "./Header.module.css";
import "../../fonts/fonts.css";

import {
  Link
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <div className={styles.header}>
          <ul className={styles.headerList}>
            <li>
              <a
                className={styles.headerListItem}
                style={{ float: "left" }}
                href="/"
              >
                Jeroen Kwekel
              </a>
            </li>
            <li>
            <Link className={styles.headerListItem} to="/about">Over mij</Link>
            </li>
            <li>
              <a className={styles.headerListItem} href="/">
                Werk
              </a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Header;
