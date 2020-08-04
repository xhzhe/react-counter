import React from "react";
import Counter from "../Counter";

class CounterGroup extends React.Component {

    inputChange = (event) => {
        if (isNaN(event.target.value)) {
            return;
        }
        event.target.value !== "" ? this.props.changeCount({type: "CHANGE", value: event.target.value}) :
            this.props.changeCount({type: "CHANGE", value: 0});
        this.props.updateTotal({type: "EMPTY"});
    }

    render() {
        return <div>
            <div>total: {this.props.total}</div>
            <span>number of counter:
                <input onChange={this.inputChange}/></span>
            {new Array(parseInt(this.props.count)).fill(0).map(((value, index) => <Counter key={index} prop={this.props}
                                                                                           total={this.props.count}/>))}
        </div>
    }
}

export default CounterGroup