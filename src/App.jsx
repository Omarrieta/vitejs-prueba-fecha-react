import { useState } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState()

  const getDate = () => {
    let date = new Date();
    let fecha = `
      ${formatoFecha(date.getDate())}/${formatoFecha(date.getMonth() + 1)}/${formatoFecha(date.getFullYear())} 
      ${date.getHours()}:${date.getMinutes()}:${formatoFecha(date.getSeconds())}`
    
    return fecha;
  }

  function formatoFecha(valor){
    return valor < 10 ? `0${valor}` : valor
  }

  return (
    <div className="App">
      <button onClick={() => setDate(getDate)}>Get Date!</button>
      <p>{ date }</p>
    </div>
  )
}

export default App
