import React, { useState } from 'react'
import './App.css';
import MyComponent from './AceEditor';
import Header from './Containers/header';
import Home from './Pages/Home';
import Intro from "./Pages/Intro"

function App() {
 const [theme, setTheme] = useState("light")
  return (
    <div className={`App ${theme==="light" ? "" : "dark"}`}>
      <Header theme={theme} setTheme={setTheme}/>
      <Home/>
    </div>
  );
}

export default App;
