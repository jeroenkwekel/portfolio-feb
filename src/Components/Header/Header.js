import React, { Component } from "react";
import styles from "./Header.module.css";
import "../../fonts/fonts.css";



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
              <a className={styles.headerListItem} href="/">
                CV
              </a>
            </li>
            <li>
              <a className={styles.headerListItem} href="/">
                Work
              </a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Header;
