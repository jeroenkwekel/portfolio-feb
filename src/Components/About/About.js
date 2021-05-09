import React, { Component } from 'react';


import Footer from '../Footer/Footer'
import styles from './About.module.css'

export default class About extends Component {
    render() {
        return (
            <div className={styles.aboutWrapper}>
                <div className={styles.Header}>
                    <div className={styles.headerContent}>
                        <img alt="Portrait" className={styles.profilePicture} src="/images/Jeroen.jpeg" />
                        <div className={styles.headerContentText}>
                            <h1>Jeroen Kwekel</h1>
                            <ul>
                                <li>18-03-1997</li>
                                <li>Rotterdam</li>
                                <li>Digital Designer</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <section className={styles.aboutConcentWrapper}>
                    <div className={styles.aboutContentLeft}>
                    <div className={styles.aboutContentWork}>
                        <div className={styles.WorkTitle}>
                            <p>2015 - 2021</p>
                            <h2>UX Designer bij Keytoe</h2>
                        </div>
                        <div className={styles.WorkCopy}>
                        Als UI/UX Designer bij Keytoe ben ik verantwoordelijk in het complete process bij het ontwikkelen
                        van digitale producten en merken. Doelgroep onderzoek, strategie, visueel ontwerp, interface ontwerp,
                        testen en het presenteren aan de opdrachtgever. Ook werk ik veel samen met data-analysten
                        om de opgeleverde websites te optimaliseren doormiddel van de verkregen data.
                        Door de technische kennis die ik heb, ben ik tijdens interne design meetings of met klanten de brug
                        
                        tussen development en design. Buiten mijn normale werk ben ik betrokken bij een stuk bedrijfs-
                        voering samen met mijn collega’s. Zo denk ik mee over ons verdienmodel, HR en andere problemen
                        
                        waar we als bedrijf tegen aan lopen.
                        </div>
                    </div>
                    
                    <div className={styles.aboutContentWork}>
                    <div className={styles.WorkTitle}>
                        <p>2016 - 2021, Hogeschool Rotterdam </p>
                        <h2>Deeltijd Communication & Multimedia Design</h2>
                    </div>
                    <div className={styles.WorkCopy}>
                    Tijdens deze opleiding word ik enorm breed opgeleid als UI/UX Designer. Ik leer merken
                    te duiden, doelgroepen onderzoeken en te gebruiken in mijn testen, interactieve applicaties
                    te ontwerpen en deze continu te itereren met de juiste technieken en handvatten. Omdat ik na
                    mijn MBO opleiding graag nog een stuk meer wilde leren, maar niet geloofde dat ik daar door full-time
                    op school zitten ging komen, heb ik gekozen om twee avonden per week naar school te gaan. Ik heb mijn scriptie gehaald en zit in de afrondende fase van de opleiding.
                    </div>
                    <div className={styles.aboutContentWork}>
                    <div className={styles.WorkTitle}>
                        <p>2013 - 2016, Grafisch Lyceum Rotterdam </p>
                        <h2>Mediamanagement</h2>
                    </div>
                    </div>
                </div>
                    
                </div>
                
                    <div className={styles.aboutcontentRight}>
                        <div className={styles.row}>
                            <h3>Contactinformatie</h3>
                            <ul>
                                <li>jkm.kwekel@gmail.com</li>
                                <li>06 245 13 604</li>
                                <li>Rotterdam, Nederland</li>
                            </ul>
                        </div>
                        <div className={styles.row}>
                            <h3>Expertise</h3>
                            <ul>
                                <li>User interface</li>
                                <li>Branding</li>
                                <li>Front-end Development</li>
                                <li>User research</li>
                                <li>User testing</li>
                                <li>CRO</li>
                            </ul>
                        </div>
                        <div className={styles.row}>
                            <h3>Learning list</h3>
                            <ul>
                                <li>Voice UI</li>
                                <li>UI Animation</li>
                                <li>Drummen</li>
                                <li>User research</li>
                                <li>User testing</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </div>
        );
    }
}