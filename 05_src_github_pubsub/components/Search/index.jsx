import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

class Search extends Component {

    search = ()=>{
        const {keyWord} = this;
        const stat = {isLoading: true,isFirst: false}
        // this.props.updateAppState(stat);
        PubSub.publish('update_list_state', stat);
            axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`).then(
                response=>{
                    console.log('成功了',response.data);
                    // this.props.saveUsers(response.data.items);
                    const stat = {users:response.data.items,isLoading: false}
                    // this.props.updateAppState(stat);
                    PubSub.publish('update_list_state', stat);
                },
                error=>{
                    console.log('失败了',error)
                    const stat = {users:[],errMsg:error.message,isLoading:false}
                    // this.props.updateAppState(stat)
                    PubSub.publish('update_list_state', stat);
                }
            )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">搜索Github用户</h3>
                    <div>
                        <input ref={c=>this.keyWord = c} type="text" placeholder="请输入名字"/>&nbsp;
                        <button onClick={this.search}>查找</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;