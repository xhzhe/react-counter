import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    setTotal = (value) => {
        this.setState({total: this.state.total + value})
    }

    setTotalZero = () => {
        this.setState({total: 0})
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    render() {
        return <div>
            <span>total: {this.state.total}</span>
            {new Array(parseInt(this.props.CounterCount)).fill(0).map(((value, index) => <Counter key={index}
                                                                                                  setTotal={this.setTotal}/>))}
        </div>
    }
}

export default CounterGroup