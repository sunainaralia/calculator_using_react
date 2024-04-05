import './App.css'
import Display from './Components/Display'
import Buttons from './Components/Buttons'
import { useState } from 'react'
function App() {
  let [data, setData] = useState("")
  function getData(e) {
    if (e.target.textContent == "=") {
      let result=eval(data)
      setData(result)
      console.log(result)
      console.log(data)
     
    } else if (e.target.textContent == "C") {
      setData("")
    } setData(data + e.target.textContent)
  }

  return (
    <>
      <h1>CALCULATOR</h1>
      <Display data={data}></Display>
      <Buttons getData={getData}></Buttons>
    </>
  )
}

export default App
