import React from 'react'
import './App'
import AppBody from "./components/AppBody";
import store from "./store";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Best Pizza</h1>
                </header>
            <AppBody store={store}/>
            </div>
        );
    }
}
export default App

