import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nabvar'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import SideBar from './components/AdminSideBar'
import { QuestionProvider } from './context/QuestionConext'
import QuestionTable from './components/QuestionTable'

function App() {

  return( 
    <>
      <QuestionProvider>

      <Routes>

      <Route path='/panel-control' element={<SideBar></SideBar>}>
      <Route path='agregar-pregunta' element={<Form></Form>}></Route>
      <Route path='preguntas' element={<QuestionTable></QuestionTable>}></Route>

      </Route>



      </Routes>

      </QuestionProvider>

    </>
  )
}
export default App
