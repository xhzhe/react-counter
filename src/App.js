import React from 'react';
import './App.css';
import CounterGroup from "./components/CounterSet";

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
            this.setState({count: event.target.value}) : this.setState({count: 0})
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <span>number of counter:
                <input type="text" value={this.state.count} onChange={this.inputChange}/></span>
                <CounterGroup CounterCount={this.state.count}/>
            </header>
        </div>
    }
}

export default App;
