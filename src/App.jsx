import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (

    <>  
      <div className='flex justify-center'>
        <img src={reactLogo}></img>
      </div>  

      <div className="flex justify-center mt-2 border-solid hover:border-dotted border-2 border-sky-500 rounded-md">
        <div className='font-medium'>React Basic World</div>
      </div>
    </>
  )
}

export default App
