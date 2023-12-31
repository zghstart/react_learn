import React, {Component} from 'react'
import './index.css'
export default class Footer extends Component {

    handleCheckAll = (event)=>{
        const {checked} = event.target
        this.props.handleCheckAll(checked)
    }
    render() {

        const {todos} = this.props;
        const total = todos.length
        const doneTotal = todos.reduce((pre,cur)=>pre+(cur.done?1:0),0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={total === doneTotal && total !== 0}/>
                </label>
                <span>
          <span>已完成{doneTotal}</span> / 全部{total}
        </span>
                <button className="btn btn-danger" onClick={this.props.clear}>清除已完成任务</button>
            </div>
        )
    }
}
