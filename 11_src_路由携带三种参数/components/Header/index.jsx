import React, {Component} from 'react';

class Header extends Component {
    render() {
        // console.log('header',this.props)
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo1</h2></div>
                </div>
            </div>
        );
    }
}

export default Header;