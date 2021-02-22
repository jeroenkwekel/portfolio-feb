import React, { Component } from 'react';
import styles from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div className={styles.footerWrapper}>
                <span className={styles.footerContent} >
                    <h3 className={styles.footerContentH3}>Get in Touch</h3>
                    <div className={styles.titleLine}></div>
                    <a className={styles.mail}href="mailto:jkm.kwekel@gmail.com" >jkm.kwekel@gmail.com</a>
                    <ul className={styles.footerSocialList}>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeroenkwekel/" className={styles.footerSocialText}>Linkedin</a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jeroen.cr" className={styles.footerSocialText}>Instagram</a>
                    </ul>
                    <p className={styles.copyright} >© Jeroen Kwekel. All Rights Reserved.</p>
                </span>
            </div>
        );
    }
}

export default Footer;