import { useState } from 'react'
import './App.css'
import Container from './component/Container'

function App() {
  console.log("hello world")
  return (
   <div className="w-screen h-screen bg-green-50 flex justify-center items-center">
    <Container/>
   </div>
  )
}

export default App
