import React, {Component} from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import qs from 'querystringify'

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        console.log(location)
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
class Detail extends Component {
    mockData = [
        {id:"001",content:"你的名字"},
        {id:"002",content:"我的心事"},
        {id:"003",content:"你是我的眼"},
    ];
    render() {
        console.log('detail',this)

        // 获取传递过来的params参数
        // const {id,title} = this.props.router.params
        // const result = this.mockData.find(info=>info.id===id);

        // 获取search参数
        // const search = this.props.router.location.search;
        // console.log(search)
        // console.log(qs.parse(search))
        // const {id,title} = qs.parse(search)

        // 获取state参数
        const {id,title} = this.props.router.location.state||{}
        console.log('location',this.props.router.location)

        const result = this.mockData.find(info=>info.id===id);

        return (
            <div>
                <ul>
                    <li>
                        ID:  {result.id}
                    </li>
                    <li>
                        title: {title}
                    </li>
                    <li>
                        content: {result.content}
                    </li>

                    test
                </ul>
            </div>
        );
    }
}

export default withRouter(Detail);


// 由于钩子不能与基于类的组件一起使用，因此您可以将其包装在函数中并传递属性：
// https://qastack.cn/programming/58548767/react-router-dom-useparams-inside-class-component
// eslint-disable-next-line import/no-anonymous-default-export
// export default (props) => (
//     <Detail
//         {...props}
//         params={useParams()}
//     />
// );


