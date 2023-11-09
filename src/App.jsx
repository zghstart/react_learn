import React, { Component } from 'react'
import {Count} from "./components/Count";



export default class App extends Component {

    state = {
        isShow:true
    }
    show =()=>{
        this.setState({isShow:!this.state.isShow})
    }
  render() {
    return (
        <div>
            {this.state.isShow &&  <Count />}


            <button onClick={this.show}>是否展示Count组件</button>
        </div>

    )
  }
}
