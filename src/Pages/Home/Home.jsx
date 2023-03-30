import React, { useEffect, useState } from 'react';
import axios from 'axios';


//Componenets
import CodeEditor from '../../Containers/codeEditor';
import Button from '../../Components/Button';
import './Home.css';

const counter = Array.from(Array(100).fill(0));
export default function Home() {

  const [editorInput, setEditorInput] = useState("");
  const [editorOuput, setEditorOutput] = useState("");
  const [response, setResponse] = useState("");
  const [loader, setLoader] = useState(false);
  const [copy, setCopy] = useState(true);

  const handleChange = (value) => {
    setEditorInput(value);
  }

  const handleClick = async (e) => {

    setResponse("")
    e.preventDefault();

    if (editorInput) {
      setLoader(true)
      setCopy(true)

      var raw = JSON.stringify({ "data": `${editorInput} jest test cases for above code` });
      try {
        let { data } = await axios.post("http://localhost:5050/data", {
          "Content-Type": "application/json",
          "body": raw
        })
        console.log("data ::", data);
        setResponse(data);
        setLoader(false)


      } catch (e) {
        console.log("error :: ", e);
      }
    }
  }


  const handleCopy = () => {
    setCopy(false)
    navigator.clipboard.writeText(response)

  }

  return (
    <section id='home'>
      <div className='editor-container container'>
        <form action="#" className='editor input'>
          <CodeEditor editorValue={editorInput} readOnly={false} onChange={handleChange} theme="tommorw" />
          <Button label="Genarate Test Cases" onClick={handleClick} />
        </form>
        <div className='editor output'>
          <CodeEditor editorValue={response} readOnly={true} theme="monokai" />
          {
            copy ? <i class="fa-solid fa-copy" onClick={handleCopy}></i> : <span className='copied'>copied</span>
          }
          {
            loader ? (<div className='loader__wrapper'>
              <p>Loading</p>
              <span className='prograssbar'></span>
            </div>) : ""
          }
        </div>
      </div>
    </section>
  )
}
