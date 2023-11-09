import React, {Component} from 'react';
import withRouter from '../../util'
class Header extends Component {

    back = ()=>{
        this.props.router.navigate(-1,{replace:false});
    }
    forward = ()=>{
        this.props.router.navigate(1,{replace:false});
    }

    go = ()=>{
        this.props.router.navigate(-2,{replace:false});
    }
    render() {
        // console.log('header',this.props)
        return (
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo1</h2></div>
                </div>
                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default withRouter(Header);