import React, { Component } from 'react';
import styles from './CaseContent.module.css'

class CaseContent extends Component {
    render() {
        let client = this.props.client;
        return (
            <article>
                <div className={styles.workInfoWrapper}>
                    <div className={styles.workInfoItem}>
                        <span className={styles.workItemUpper} >Client</span>
                        <span className={styles.workItemLower} >{client.name}</span>
                    </div>
                    <div className={styles.workInfoItem}>
                        <span className={styles.workItemUpper} >Timeframe</span>
                        <span className={styles.workItemLower} >{client.timeFrame}</span>
                    </div>
                    <div className={styles.workInfoItem}>
                        <span className={styles.workItemUpper} >Work</span>
                        <span className={styles.workItemLower} >{client.workDone}</span>
                    </div>
                    <div className={styles.workInfoItem}>
                        <span className={styles.workItemUpper} >Website</span>
                        <a rel='noreferrer' className={styles.workItemLower} target="_blank" href={this.props.client.website}>{this.props.client.name}.nl</a>
                    </div>
                </div>
                <div className={styles.caseIntroductionWrapper}>
                    <div className={styles.textIntroduction}>
                        <h4 className={styles.textIntroductionText} >Twee jonge ondernemers, die ook nog eens broers zijn. En, oja.. ze zijn ook nog de zoons van een plantenkweker! Combineer dat met de wil om het kopen van planten simpeler te maken en tada.. Plantsome is geboren.</h4>
                    </div>
                    <div className={styles.introPhoto}>
                        <img className={styles.introPhotoImg} alt="First-mockup" src="https://assets.weareadaptable.com/app/uploads/2020/08/25082036/bah_1.png" />
                    </div>

                    <div className={styles.textBlockWrapper} >
                        <div className={styles.textBlockTitleWrapper}>
                            <div className={styles.textBlockTitle}>Vraag van <br /> de klant</div>
                            <div className={styles.titleLine}></div>
                        </div>
                        
                        <p className={styles.textBlockText} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.</p>
                    </div>
                </div>
            </article>
        );
    }
}

export default CaseContent;