import React, { Component } from 'react';
import styles from './TabNav.module.css'

class TabItem extends Component {

    render() {
        return (
        <div>
        {this.props.active === this.props.value.name ?
            <li className={styles.liActive} onClick={() => this.props.setSelected(this.props.value)}>{this.props.value.name}</li>
            :
             <li className={styles.liInactive} onClick={() => this.props.setSelected(this.props.value)}>{this.props.value.name}</li>
        }
        </div>
        )
    }
}

export default TabItem;