import './App.css'
import Form from './components/Form'
import { Route, Routes } from 'react-router-dom'
import SideBar from './components/AdminSideBar'
import { QuestionProvider } from './context/QuestionConext'
import QuestionTable from './components/QuestionTable'
import LandingPage from './pages/LandingPage'
import LessonPage from './pages/LessonPage'
import ProfilePage from './pages/Profile'
import PasswordPage from './pages/PasswordPage'

function App() {

  return( 
    <>
      <QuestionProvider>

      <Routes>

      {/* <Route path='/' element={<LandingPage></LandingPage>}> */}

      <Route path='/'element={<LandingPage></LandingPage>}></Route>
      <Route path='/lecciones/:nombre' element={<LessonPage></LessonPage>}></Route>
      <Route path='/perfil' element={<ProfilePage></ProfilePage>}></Route>
      <Route path='/contraseña' element={<PasswordPage></PasswordPage>}></Route>
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
