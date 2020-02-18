import React, { Component } from "react";

const ccc = Comp => {
    return class NewComponent extends Component {
        state = {
            cccState: 'cccState'
        }
        componentDidMount() {
            this.setState({
                cccState: 'cccReState'
            })
            console.log('ccc', this);
        }
        render() {
            const { cccState } = this.state
            return (
                <div>{cccState}
                    <Comp {...this.props} agec="ccc" {...this.state}/>
                </div>
            )
        }
    }
}

const bbb = (...args) => {
    return (Comp) => class NewComponent extends Component {
        bbbFun =()=>{
            console.log('bbbFun=')
        }
        componentDidMount() {
            console.log('bbb', this);
        }
        render() {
            return <Comp  {...this.props} ageb="bbb" bbbFun={this.bbbFun}/>
        }
    }
}


@ccc
@bbb('canshu')
class DecoratorsTest extends Component {
    componentDidMount() {
        console.log('aaa的this.props', this);
    }
    render() {
        return <div>aaa</div>
    }
}

export default DecoratorsTest
