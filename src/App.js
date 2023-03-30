import React, { useState } from 'react'
import './App.css';
import MyComponent from './AceEditor';
import Header from './Containers/header';
import Home from './Pages/Home';
import Intro from "./Pages/Intro"

function App() {
  const [appTheme, setAppTheme] = useState("light")
  return (
    <div className={`App ${appTheme === "light" ? "" : "dark"}`}>
      <Header theme={appTheme} setTheme={setAppTheme} />
      <Home />
    </div>
  );
}

export default App;
