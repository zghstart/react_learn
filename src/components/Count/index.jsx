import React, {Component} from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";

export function Count(){

    const [cnt,setCnt] = React.useState(0)

    function add() {
        setCnt(cnt+1)
        setCnt(v=>v+1)
    }

    let death = ()=>{
        // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        // createRoot(document.getElementById('root')).unmount()

        // 报错，需要在父容器进行判断操作
        const root = document.getElementById('root'); // 替换为你实际的根容器元素
        ReactDOM.unmountComponentAtNode(root);

    }

    let myRef = React.useRef();

    let show = ()=>{
        console.log(myRef)
        alert(myRef.current.value)
    }

    // 使用该函数，就可以在函数式组件中使用生命周期钩子
    React.useEffect(()=>{
        // 相当于 componentDidMount与componentDidUpdate
        console.log('componentDidMount与componentDidUpdate')
        let timer = setInterval(()=>{
            setCnt(v=>v+1)
        },1000)
        return ()=>{
            // 相当于 componentWillUnmount
            console.log('componentWillUnmount')
            clearInterval(timer)
        }
    },[]) // 如果指定的是[]，回调函数只会在第一次render后执行。

    return (<div>
        <h2>当前状态值为 {cnt}</h2>
        <input ref={myRef}/>
        <button onClick={add}>点我加1</button>
        {/*<button onClick={death}>点我加1</button>*/}
        <button onClick={show}>点我展示ref</button>
    </div>)
}


// import React, {Component} from 'react';

// class Count extends Component {
//
//     state = {
//         cnt:0,
//         name:'张三'
//     }
//
//     add = ()=> {
//         const {cnt} = this.state;
//         this.setState({cnt: cnt+1})
//     }
//
//     death = ()=>{
//         // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
//         // createRoot(document.getElementById('root')).unmount()
//
//         // 报错，需要在父容器进行判断操作
//         const root = document.getElementById('root'); // 替换为你实际的根容器元素
//         ReactDOM.unmountComponentAtNode(root);
//
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//         this.timer = setInterval(()=>{
//             const {cnt} = this.state;
//             this.setState({cnt: cnt+1})
//         },500)
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount')
//         clearInterval(this.timer)
//     }
//
//     render() {
//         return (
//             <div>
//                 <h2>当前状态值为 {this.state.cnt}-- {this.state.name}</h2>
//                 <button onClick={this.add}>点我加1</button>
//                 <button onClick={this.death}>点我销毁组件</button>
//             </div>
//         );
//     }
// }
//
// export {Count};