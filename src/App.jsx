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
import Simulator from './pages/Simulator'
import Simulatordos from './pages/Simulator2'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import QuestionPage from './pages/QuestionPage'
import AdminLessonsPage from './pages/AdminLessonsPage'
import AdminSimulatorsPage from './pages/AdminSimulatorPage'
import AdminQuizzesPage from './pages/AdminQuizzesPage'
import AdminUsersPage from './pages/AdminUsersPage'
import AdminSubscriptionsPage from './pages/AdminSubscriptionsPage'
import SalesDashboard from './pages/SalesDashboard'
import ContentDashboard from './pages/ContentDashboard'
import UserProgressDashboard from './components/UserDashboard'
import TestimonialsPage from './pages/TestimonialsPage'
import AboutUs from './pages/AboutUs'
import ContactPage from './pages/ContactPage'

function App() {

  return( 
    <>
      <QuestionProvider>

      <Routes>

      <Route path='/registro'  element={<RegisterPage></RegisterPage>}></Route>
      <Route path='/login'  element={<LoginPage></LoginPage>}></Route>

      <Route path='/'element={<LandingPage></LandingPage>}></Route>
      <Route path='/planes' element={<PricingPage></PricingPage>}></Route>
      <Route path='/testimonios' element={<TestimonialsPage></TestimonialsPage>}></Route>
      <Route path='/nosotros' element={<AboutUs></AboutUs>}></Route>
      <Route path='/contacto' element={<ContactPage></ContactPage>}></Route>
      
      
      <Route path='/exani-iii/'element={<UserDashboard></UserDashboard>}></Route>
      <Route path='/lecciones'element={<LessonsPage></LessonsPage>}></Route>
      <Route path='/lecciones/:nombre' element={<LessonPage></LessonPage>}></Route>
      <Route path='/cuestionarios/:tema' element={<QuizzesPage></QuizzesPage>}></Route>
      <Route path='/simuladores'element={<ExamSimulators></ExamSimulators>}></Route>
      <Route path='/simulador'element={<Simulator></Simulator>}></Route>
      <Route path='/simulador/2'element={<Simulatordos></Simulatordos>}></Route>
      

      <Route path='/progreso' element={<UserProgressDashboard></UserProgressDashboard>}></Route>
      <Route path='/perfil' element={<ProfilePage></ProfilePage>}></Route>
      <Route path='/planes' element={<PricingPage></PricingPage>}></Route>
      <Route path='/contraseña' element={<PasswordPage></PasswordPage>}></Route>
      

      <Route path='/panel-control' element={<SideBar></SideBar>}>
      
      <Route path='preguntas' element={<QuestionPage></QuestionPage>}></Route>
      <Route path='lecciones' element={<AdminLessonsPage></AdminLessonsPage>}></Route>
      <Route path='simuladores' element={<AdminSimulatorsPage></AdminSimulatorsPage>}></Route>
      <Route path='cuestionarios' element={<AdminQuizzesPage></AdminQuizzesPage>}></Route>
      <Route path='usuarios' element={<AdminUsersPage></AdminUsersPage>}></Route>
      <Route path='subscripciones' element={<AdminSubscriptionsPage></AdminSubscriptionsPage>}></Route>

      <Route path='ventas' element={<SalesDashboard></SalesDashboard>}></Route>
      <Route path='contenido' element={<ContentDashboard></ContentDashboard>}></Route>

      <Route path='agregar-pregunta' element={<Form></Form>}></Route>

      </Route>



      </Routes>

      </QuestionProvider>

    </>
  )
}
export default App
