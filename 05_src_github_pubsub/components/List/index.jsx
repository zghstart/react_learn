import React, {Component} from 'react';
import './index.css'
import PubSub from 'pubsub-js'
class List extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        errMsg :''
    }

    saveUsers=(users)=>{
        this.setState({users})
    }



    componentDidMount() {
        this.token = PubSub.subscribe('update_list_state', (msg,stateObj)=>{
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }

    render() {

         const {users,isFirst,isLoading,errMsg} = this.state
        return (
            <div className="row">
                {

                    isFirst?<h1>欢迎使用</h1>:
                        isLoading?<h1>正在加载</h1>:
                            errMsg?<h1>{errMsg}</h1>:
                                users.map((user,index)=>{
                                    return (
                                        <div className="card" key={index}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer" >
                                                <img src={user.avatar_url} alt='pic' style={{width:'100px'}}/>
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })

                }


            </div>
        );
    }
}

export default List;