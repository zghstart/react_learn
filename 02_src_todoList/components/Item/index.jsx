import React, {Component} from 'react';
import './index.css'
class Item extends Component {

    state = {
        mouseIn:false
    };
    handleClick = (id)=> {
        // console.log(id,'开始处理！')
        return (event)=> {
            this.props.checkTodo(id,event.target.checked);
            console.log(id,event.target.checked)
        }
    };

    handleMouse = (mouseIn)=>{
        return () => {
            // console.log(flag,event)
            this.setState({mouseIn})
        }
    };

    handleDelete=(id)=>{
        /* eslint-disable */
        if (confirm('确认删除吗？')){
            this.props.handleDelete(id)
        }
    }

    render() {
        const {id,name,done} = this.props;
        const {mouseIn} = this.state
        return (
            <li style={{background:mouseIn?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox"
                           checked={done} onChange={this.handleClick(id)}/>&nbsp;
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={()=>this.handleDelete(id)} style={{display:mouseIn?'block':'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;