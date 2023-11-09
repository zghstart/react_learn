import React, {Component} from 'react';
import Message from "./Message";
import News from "./News";
import {NavLink, Route, Routes} from "react-router-dom";

class Home extends Component {
    render() {
        console.log('home',this.props)
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                    </li>
                </ul>
                <div>
                    <Routes>
                        <Route path="message" element={<Message/>}/>
                        <Route path="news" element={<News/>}/>

                    </Routes>
                </div>
            </div>

        );
    }
}

export default Home;