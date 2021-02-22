import React, { Component } from 'react';

import styles from './CaseSlider.module.css'

export default class CaseSlider extends Component {
    render() {
        return (
            <div className={styles.caseSlider} style={{
                backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 94.29%),
                url(${this.props.client.imgSrc})`
            }}>
                <div className={styles.content}>
                    <div className={styles.caseContent} >
                        <h1 className={styles.caseContentH1} >{this.props.client.name}</h1>
                        <h4 className={styles.caseContentH4} >{this.props.client.desc}</h4>  
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

