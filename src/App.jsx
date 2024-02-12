import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nabvar'
import Form from './components/Form'

function App() {

  return( 
  <>
    <div className="all-container">
    <Navbar></Navbar>
    <Form></Form>
    </div>
  </>
  )
}
export default App
