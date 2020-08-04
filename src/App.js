import React from 'react';
import './App.css';
import CounterGroupContainer from "./containers/CounterGroupContainer";

class App extends React.Component {
    render() {
        return <div className="App">
            <header className="App-header">
                <CounterGroupContainer/>
            </header>
        </div>
    }
}

export default App;
