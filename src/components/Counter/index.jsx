import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            total: 0
        }
    }

    add = () => {
        this.setState((preState) => ({number: preState.number++}))
        this.props.setTotal(1);
    }

    reduce = () => {
        this.setState(({number: this.state.number - 1}))
        this.props.setTotal(-1);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.total !== state.total) {
            return {
                number: 0,
                total: props.total
            }
        }
        return null;
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