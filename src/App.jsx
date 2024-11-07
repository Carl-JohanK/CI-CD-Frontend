import { useState } from 'react'
import TextUotput from './components/TextOutput'
import TextInput from'./components/TextInput'
import Buttens from'./components/Buttons'
import './App.css'

function App() {
  const [cyferOutput, setCyferOutput] = useState("your input")

  function setOutput(cryptMetod){
    const output = document.querySelector('#text-input').value;
    const key = document.querySelector('#key-input').value;
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
