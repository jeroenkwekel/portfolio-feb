import React from 'react';
import TabItem from './TabItem';
import styles from './TabNav.module.css'

class TabNav extends React.Component {

  render() {
    return (
      <ul className={styles.tabNavList} >
      {Object.entries(this.props.clients).map(([key, value]) => {
        return <TabItem active={this.props.active} key={key} value={value} setSelected={this.props.setSelected} />
    })}
    </ul>
    )
  }
}

export default TabNav;