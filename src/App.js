import React from 'react';
import './App.css';
import Toggle from "./toggle";

function App() {
  return (
    <div className="App">
        <Toggle>
            <Toggle.OffLabel>
                <p> Toggle is Off </p>
            </Toggle.OffLabel>
            <Toggle.Button></Toggle.Button>
            <Toggle.OnLabel>
                <p> Toggle is On </p>
            </Toggle.OnLabel>
        </Toggle>
    </div>
  );
}

export default App;
