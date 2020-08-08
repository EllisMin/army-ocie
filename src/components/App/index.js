import React from "react";
import Card from "../Card";

import "./styles.scss";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1>Dongbin Min</h1>
      </header>
      <div className="main">
        <Card title="MISSING: Gloves flyers sz 9 (0112)" missing />
        <Card title="Bladder, Hydration system (9698) & Carrier Hydration System (1319)" />
      </div>
    </div>
  );
}

export default App;
