import { useState } from 'react'
import TextUotput from './components/textUotput'
import TextInput from'./components/textInput'
import Buttens from'./components/buttens'
import './App.css'

function App() {
  const [cyferOutput, setCyferOutput] = useState("your input")

  function setOutput(cryptMetod){
    const output = document.querySelector('#test-input').value;
    const key = document.querySelector('#text-input').value;
    setCyferOutput(cryptMetod + ": " + output + " key: " + key)
  }

  return (
    <>
    <TextUotput cyferOutput={cyferOutput}/>
    <TextInput />
    <Buttens setOutput={setOutput}/>
    </>
  )
}

export default App
