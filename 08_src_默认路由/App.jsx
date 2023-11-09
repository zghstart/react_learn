import React, { Component } from 'react'
import About from "./pages/About";
import Home from "./pages/Home";
import {Route, Routes, NavLink} from 'react-router-dom'
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
        <div>
           <Header/>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/*
                        <a className="list-group-item active" href="./about.html">About</a>
                        <a className="list-group-item" href="./home.html">Home</a>
                        */
                        }
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">

                            {/*注册路由*/}
                            <Routes>

                                <Route path="/about" element={<About/>}/>
                                <Route path="/home" element={<Home/>}/>
                            <Route path="*" element={<Home/>}/>
                            </Routes>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
