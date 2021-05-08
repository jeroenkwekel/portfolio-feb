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
                    {client.name !== 'Overige' &&
                    <div className={styles.workInfoItem}>
                        <span className={styles.workItemUpper} >Website</span>
                        <a rel='noreferrer' className={styles.workItemLower} target="_blank" href={this.props.client.website}>{this.props.client.name}.nl</a>
                    </div>
        }
                </div>
                <div className={styles.caseIntroductionWrapper}>
                    <div className={styles.textIntroduction}>
                        <h4 className={styles.textIntroductionText} >{client.intro}</h4>
                    </div>
                    <div className={styles.introPhoto}>
                        <img className={styles.introPhotoImg} alt="First-mockup" src={client.img_1} />
                    </div>

                    <div className={styles.textBlockWrapper} >
                        <div className={styles.textBlockTitleWrapper}>
                            <div className={styles.textBlockTitle}>{client.title_1}</div>
                            <div className={styles.titleLine}></div>
                        </div>
                        
                        <p className={styles.textBlockText} >{client.txt_1}</p>
                    </div>
                    {client.img_2 &&
                    <div className={styles.introPhoto}>
                        <img className={styles.introPhotoImg} alt="First-mockup" src={client.img_2} />
                    </div>
                    }
                    <div className={styles.textBlockWrapper} >
                    <div className={styles.textBlockTitleWrapper}>
                        <div className={styles.textBlockTitle}>{client.title_2}</div>
                        <div className={styles.titleLine}></div>
                    </div>
                    <p className={styles.textBlockText} >{client.txt_2}</p>
                </div>
                {client.img_3 &&
                <div>
                    <div className={styles.introPhoto}>
                            <img className={styles.introPhotoImg} alt="First-mockup" src={client.img_3} />
                    </div>
                    <div className={styles.textBlockWrapper} >
                    {client.title_3 &&
                        <div className={styles.textBlockTitleWrapper}>
                        
                            <div className={styles.textBlockTitle}>{client.title_3}</div>
                            <div className={styles.titleLine}></div>
                        
                        </div>
                    }
                        <p className={styles.textBlockText} >{client.txt_3}</p>
                    </div>
                </div>
                }
                {client.img_4 &&
                <div>
                    <div className={styles.introPhoto}>
                    <img className={styles.introPhotoImg} alt="First-mockup" src={client.img_4} />
                <div className={styles.textBlockWrapper} >
                {client.title_4 &&
                    <div className={styles.textBlockTitleWrapper}>
                        <div className={styles.textBlockTitle}>{client.title_4}</div>
                        <div className={styles.titleLine}></div>
                    </div>
                }
                    <p className={styles.textBlockText} >{client.txt_4}</p>
                    
                </div>
                </div>
                {client.img_5 &&
                <img className={styles.introPhotoImg} alt="First-mockup" src={client.img_5} />
                }
            </div>
                }
            
                </div>
            </article>
        );
    }
}

export default CaseContent;