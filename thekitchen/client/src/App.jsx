//import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import jonImg from './assets/lijonalgaib.jpg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <div className="card" style="width:300px">
            <img src={jonImg} alt="Image" style="width:100%"/>
            <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
