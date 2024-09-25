import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Counter from './hooks/counter'
import './App.css'

function App() {
  return (
    <>  
      <Navbar />

      <div className="flex justify-center mt-2 border-solid hover:border-dotted border-2 border-sky-500 rounded-md">
        <div className='font-medium p-4'>
          <h2> Welcome to React Basic World</h2>  
        </div>
      </div>

      <Counter />
      
    </>
  )
}

export default App
