import React from 'react';
import './App.css';
import CounterGroup from "./components/CounterSet";
import store from "./components/store";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    inputChange = (event) => {
        if (isNaN(event.target.value)) {
            return;
        }
        event.target.value !== "" ?
            this.setState({count: event.target.value}) : this.setState({count: 0});
        this.counterGroup.setTotalZero();
        store.dispatch({type: 'totalChange', value: this.state.count});
    }

    onRef = (ref) => {
        this.counterGroup = ref
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <span>number of counter:
                <input onChange={this.inputChange}/></span>
                <CounterGroup CounterCount={this.state.count} onRef={this.onRef}/>
            </header>
        </div>
    }
}

export default App;
