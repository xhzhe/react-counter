import React from 'react'
import store from "../store";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
        store.subscribe(this.setZero);
    }

    add = () => {
        this.setState((preState) => ({number: preState.number++}))
        this.props.setTotal(1);
    }

    reduce = () => {
        this.setState(({number: this.state.number - 1}))
        this.props.setTotal(-1);
    }

    setZero = () => {
        this.setState({number: 0})
    }

    render() {
        return <div>
            <button onClick={this.add}>+</button>
            <mark>{this.state.number}</mark>
            <button onClick={this.reduce}>-</button>
        </div>
    }
}

export default Counter;