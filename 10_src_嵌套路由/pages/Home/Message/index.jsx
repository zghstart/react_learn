import React, {Component} from 'react';

class Message extends Component {
    render() {

        console.log('message',this.props)
        return (
            <div>
                <h4>我是Message的内容</h4>
                <ul>
                    <li>
                        <a href="/message1">message001</a>&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="/message2">message002</a>&nbsp;&nbsp;
                    </li>
                    <li>
                        <a href="/message/3">message003</a>&nbsp;&nbsp;
                    </li>
                </ul>
            </div>
        );
    }
}

export default Message;