import React, { Component } from 'react'

import {Route, Routes, NavLink} from 'react-router-dom'
import Count from "./components/Count";


export default class App extends Component {
  render() {
    return (
        <div>
            <Count/>
        </div>

    )
  }
}
