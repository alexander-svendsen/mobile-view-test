import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Flex} from "./Flex";
import {FlexViewHeight} from "./FlexViewHeight";


function Default(props) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <button className={"myButton"} onClick={() => props.onClick(1)}>Flex</button>
            <button className={"myButton"} onClick={() => props.onClick(2)}>FlexViewHeight</button>
            <button className={"myButton"} onClick={() => props.onClick(3)}>Sticky</button>
        </div>
    )
}

function Sticky(props) {
    return (
        <div>
            <div id="header" className="row">
                <p><b>header</b>
                    <br/>
                    <br/>(sized to content)</p>
            </div>
            <div id="content" className="row">
                <p>
                    <b>content</b>
                    (fills remaining space)
                </p>
            </div>
            <div id="footer" className="row">
                <p><b>footer</b> (fixed height)</p>
            </div>
        </div>

    )
}

function App() {
    const [view, setView] = useState(0);

    if (view === 0){
        return <Default onClick={(num) => setView(num)}/>
    }
    else if (view === 1) {
        return <Flex/>
    }
    else if (view === 2) {
        return <FlexViewHeight/>
    }
    else if (view === 3) {
        return <Sticky/>
    }

    return null;
}

export default App;
