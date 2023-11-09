import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPerson} from "../../redux/action/person";

class Person extends Component {

    add = () => {
        const {nameNode,ageNode} = this
        console.log('Person',nameNode.value,ageNode.value)
        this.props.addP({id:Date.now(),name:nameNode.value,age:ageNode.value})
}
    render() {
        console.log('Person',this.props)

        return (
            <div>
                <h2>我是Person组件,Count组件的和为{this.props.cnt}</h2>
                <input type='text' placeholder="请输入名字" ref={c=> this.nameNode=c}/>
                <input type='text' placeholder="请输入年龄" ref={c=> this.ageNode=c}/>
                <button onClick={this.add} >添加</button>
                <ul>
                {
                        this.props.person.map(p=>{
                            return <li key={p.id}>{p.name}=========={p.age}</li>
                    })
                }
                </ul>
            </div>
        );
    }
}

export default connect(
    state=>(state),
    {
        addP:addPerson
    }
)(Person);