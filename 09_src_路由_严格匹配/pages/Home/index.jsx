import React, {Component} from 'react';

class Home extends Component {
    render() {
        console.log('home',this.props)
        return (
            <h3>我是Home的内容</h3>
        );
    }
}

export default Home;