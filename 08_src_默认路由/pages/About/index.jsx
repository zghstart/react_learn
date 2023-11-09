import React, {Component} from 'react';

class About extends Component {
    render() {
        console.log('about',this.props)
        return (
            <h3>我是About的内容</h3>
        );
    }
}

export default About;