import { createContext,useContext,useState } from "react";
import { newQuestionRequest } from "../api/questions";
import {toast} from 'react-toastify'

const QuestionConext=createContext()

export const useQuestion=()=>{
    const context=useContext(QuestionConext)
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context

}



export const QuestionProvider=({children})=>{
    const [questions, setquestions] = useState([]);
    const [errors, setErrors] = useState([]);

    const addQuestion=async(question)=>{
        try {
            const res=await newQuestionRequest(question) 
            setquestions(res.data)
            toast.success("Pregunta agregada")
        } catch (error) {
            console.log(error)
            setErrors(error)
            toast.error("Error en la solicitud")
        }
    }

    return(
        <QuestionConext.Provider value={{
            questions,addQuestion,errors
        }}>

        {children}
        </QuestionConext.Provider>
    )

}