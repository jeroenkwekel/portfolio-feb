import React from 'react'
import Data from '../cases'
import TabNav from '../Components/TabNav/TabNav'
import CaseSlider from '../Components/CaseSlider/CaseSlider'
import CaseContent from '../Components/CaseContent/CaseContent'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

class Home extends React.Component {
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
            <>
            <Header />
            <CaseSlider client={this.state.active}> 
              <TabNav clients={this.state.data} active={ this.state.active.name } setSelected={ this.setSelected } />
            </CaseSlider>
            <CaseContent client={this.state.active} />
            <Footer />
            </>
        )
    }
    
  }
  
  export default Home