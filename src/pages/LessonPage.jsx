import LearningSideBar from "../components/LearningSideBar";
import UserHeader from "../components/userHeader";
import LessonParadigmas from "../../lessons/Lesson";
import MedicionLeccion from "../../lessons/MediccionLeccion";
import { useParams } from "react-router-dom";


const lessons={ 
  'paradigmas-de-investigacion': LessonParadigmas,
  'niveles-de-medicion':MedicionLeccion
};


const LessonPage = () => {
  
  const {nombre}=useParams()

  const  LessonComponent=lessons[nombre]




  return (
    <>
      <UserHeader></UserHeader>
      <div className="lesson-content-container">
        <LearningSideBar lessonName={nombre}></LearningSideBar>
        <div className="lesson-container">
            <LessonComponent></LessonComponent>
        </div>
      </div>
    </>
  );
};

export default LessonPage;
