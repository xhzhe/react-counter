import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    add = () => {
        this.setState((preState) => ({number: preState.number++}))
    }

    reduce = () => {
        this.setState(({number: this.state.number - 1}))
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