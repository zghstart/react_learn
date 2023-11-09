import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Detail from "./Detail";

import withRouter from '../../../util'

class Message extends Component {

    state = {
        msgArr : [
            {id:"001",title:"消息1"},
            {id:"002",title:"消息2"},
            {id:"003",title:"消息3"},
        ]
    }

    pushShow= (id, title) =>{
        return ()=>{
            this.props.router.navigate(`/home/message/detail/${id}/${title}`,{replace:false});
        }
    }

    back = ()=>{
        this.props.router.navigate(-1,{replace:false});
    }
    forward = ()=>{
        this.props.router.navigate(1,{replace:false});
    }

    go = ()=>{
        this.props.router.navigate(-2,{replace:false});
    }
    replaceShow= (id, title) =>{
        return ()=>{
            this.props.router.navigate(`/home/message/detail/${id}/${title}`,{replace:true});
        }
    }
    render() {

        console.log('message',this.props)
        return (
            <div>
                <h4>我是Message的内容</h4>
                <ul>

                    {
                        this.state.msgArr.map((msg)=>{
                            return (
                                <li key={msg.id}>
                                    {/*跳转路由时携带params参数*/}
                                    <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
                                    <button onClick={this.pushShow(msg.id,msg.title)}>push</button>
                                    <button onClick={this.replaceShow(msg.id,msg.title)}>replace</button>

                                    {/*跳转路由时携带search参数*/}
                                    {/*<Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;*/}

                                    {/*跳转路由时携带state参数*/}
                                    {/*<Link to={ {*/}
                                    {/*        pathname:'/home/message/detail',*/}
                                    {/*        // search: '?sort=name',*/}
                                    {/*        // hash: '#the-hash',*/}
                                    {/*}} state={{id:msg.id,title:msg.title}}>{msg.title}</Link>&nbsp;&nbsp;*/}
                                </li>
                            )
                        })


                    }
                    <Routes>
                        {/*使用路由时，声明接收params参数*/}
                        <Route path="detail/:id/:title" element={<Detail/>}/>
                        {/*使用路由时，声明接收search参数（其实无需声明，直接注册即可使用）*/}
                        {/*<Route path="detail" element={<Detail/>}/>*/}

                        {/*使用路由时，声明接收state参数（其实无需声明，直接注册即可使用）*/}
                        {/*<Route path="detail" element={<Detail/>}/>*/}
                    </Routes>
                </ul>

                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }


}

export default withRouter(Message);