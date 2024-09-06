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
import PricingPage from './pages/PricingPage'
import QuizzesPage from './pages/QuizPage'
import UserDashboard from './pages/UserDashboard'
import LessonsPage from './pages/LessonsPage'
import ExamSimulators from './pages/ExamSimulators'

function App() {

  return( 
    <>
      <QuestionProvider>

      <Routes>

      <Route path='/'element={<LandingPage></LandingPage>}></Route>
      <Route path='/exani-iii/'element={<UserDashboard></UserDashboard>}></Route>
      <Route path='/lecciones'element={<LessonsPage></LessonsPage>}></Route>
      <Route path='/lecciones/:nombre' element={<LessonPage></LessonPage>}></Route>
      <Route path='/cuestionarios/:tema' element={<QuizzesPage></QuizzesPage>}></Route>
      <Route path='/simuladores'element={<ExamSimulators></ExamSimulators>}></Route>
      

      <Route path='/perfil' element={<ProfilePage></ProfilePage>}></Route>
      <Route path='/planes' element={<PricingPage></PricingPage>}></Route>
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
