import React from 'react'
import TabNav from '../TabNav/TabNav'
import CaseSlider from '../CaseSlider/CaseSlider'
import CaseContent from '../CaseContent/CaseContent'
import Data from '../../cases'
import Footer from '../../Components/Footer/Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      active: Data.Plantsome
    }
  }

  setSelected = (client) => {
    this.setState({ active: client });
    console.log(this.state.active)
  }

  render() {
    return (
      <div>
        <CaseSlider client={this.state.active}> 
          <TabNav clients={this.state.data} active={ this.state.active.name } setSelected={ this.setSelected } />
        </CaseSlider>
        <CaseContent client={this.state.active} />
        <Footer />
      </div>
    );
  }
}
export default App;
