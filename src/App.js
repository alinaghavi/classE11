import React from 'react';
import './App.css';
import Toggle from "./toggle";

function App() {
  return (
    <div className="App">
        <Toggle>
            <Toggle.Off>
                <p> Toggle is Off </p>
            </Toggle.Off>
            <Toggle.Button></Toggle.Button>
            <Toggle.On>
                <p> Toggle is On </p>
            </Toggle.On>

        </Toggle>
    </div>
  );
}

export default App;
