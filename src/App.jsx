import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import AboutCalendar from './components/AboutCalendar';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <About/>
      <AboutCalendar/>
      <Work/>
      <Testimonial/>
    </div>
  )
}

export default App
