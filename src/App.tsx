import { useState } from 'react'
import jenkinsLogo from './assets/jenkins.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={jenkinsLogo} className="logo react" alt="jenkins logo" />
      </div>
      <h1>Group 5 was here :)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edited by Dulanja, Shital, Saara and Andrei
        </p>
      </div>
    </>
  )
}

export default App
