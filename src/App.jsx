import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/work';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <About/>
      <Work/>
    </div>
  )
}

export default App
