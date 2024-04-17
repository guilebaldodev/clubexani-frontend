import { useQuestion } from "../context/QuestionConext";
import {useForm} from 'react-hook-form'
import {ToastContainer, toast} from 'react-toastify'
import { useEffect } from "react";

const Form = () => {

    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    const {questions,addQuestion,errors:questionErrors}=useQuestion()


    const submitForm=async(data)=>{
        console.log("hola?")
        try {
            await addQuestion(data)
            reset()
        } catch (error) {
            console.log(error)
        }
    }


    return ( <>
    <div className="container-form">
    <form onSubmit={handleSubmit(submitForm)}className="form">
        <div className="form-title">
        <h3>BANCO DE PREGUNTAS</h3>
        <button >GUARDAR</button>
        </div>
        <div className="pregunta">
            <div className="pregunta-container">

                <div className="pregunta-inputs">
                    <div className="input-config">
                    <label htmlFor="textAreaPregunta">Pregunta</label>
                    <textarea {...register("question",{required:true})} name="question" placeholder="Ingresa la pregunta" type="text" />
                    </div>
                    
                    <div className="selecteds">
                        <div className="input-config select-config">
                        <label htmlFor="">Area</label>
                        <select {...register("area",{required:true})} name="area" id="selectArea">
                            <option value="1">Metodología de la investigacion</option>
                            <option value="2">Comprensión lectora</option>
                            <option value="3">Redacción indirecta</option>
                            <option value="4">Pensamiento matematico</option>
                        </select>
                        </div>

                        {/* <div className="input-config select-config">
                        <label htmlFor="">Autor</label>
                        <select {...register("author",{required:true})} name="author" id="selectAutor">
                            <option value="Guilebaldo">Guilebaldo</option>
                            <option value="Alexa">Alexa</option>
                        </select>
                        </div> */}

                    </div>
                </div>

                <div className="pregunta-img">
                    <div className="circular-div">
                        <img src="/icons/image-icon.png" alt="" />
                    </div>
                    <p>Añade una imagen</p>
                </div>

            </div>
            <div className="respuestas">
            <div className="respuestas-container">
                <div className="textarea-duo">
                    <label htmlFor="">Respuesta 1</label>
                    <textarea {...register("answer1.answer",{required:true})}  placeholder="Ingresa la respuesta 1" name="answer1.answer" id="" cols="30" rows="10"></textarea>

                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Explicacion</label>
                    <textarea {...register("answer1.explanation",{required:true})}  name="answer1.explanation" placeholder="Ingresa la explicacion "id="" cols="30" rows="10"></textarea>
                </div>

                <div className="textarea-duo">
                    <label htmlFor="">Respuesta 2</label>
                    <textarea {...register("answer2.answer",{required:true})} name="answer2.answer" placeholder="Ingresa la pregunta 2" id="" cols="30" rows="10"></textarea>

                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Explicacion</label>
                    <textarea {...register("answer2.explanation",{required:true})}name="answer2.explanation" placeholder="Ingresa la explicacion" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Respuesta 3</label>
                    <textarea {...register("answer3.answer",{required:true})} name="answer3.answer" placeholder="Ingresa la respuesta 3" id="" cols="30" rows="10"></textarea>

                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Explicacion</label>
                    <textarea {...register("answer3.explanation",{required:true})} name="answer3.explanation" placeholder="Ingresa la explicacion"  id="" cols="30" rows="10"></textarea>
                </div>

            </div>
            
            {/* <textarea name="" id="" cols="30" rows="10"></textarea>
            <textarea name="" id="" cols="30" rows="10"></textarea> */}


            </div>

            <div className="preguntas-options">
            <div className="options-temas">
                <p>Ingresa los temas relacionados</p>
                <div className="textarea-duo">
                        <label htmlFor="">Tema 1</label>
                        <select {...register("relatedTopic",{required:true})}  name="relatedTopic" id="">
                            <option className="option-select" value="None">Sin definir</option>
                        </select>
                    </div>
                    <div className="textarea-duo">
                        <label htmlFor="">Tema 2</label>
                        <select {...register("relatedTopic2",{required:true})}  name="relatedTopic2" id="">
                            <option value="None">Sin definir</option>
                        </select>
                    </div>
                    <div className="textarea-duo">
                        <label htmlFor="">Tema 3</label>
                        <select {...register("relatedTopic3",{required:true})} name="relatedTopic3" id="">
                            <option value="None">Sin definir</option>
                        </select>
                    </div>
                </div>

                
                <div className="options-radio">
                    <p>Escoje la respuesta correcta</p>
                    <div>
                    <input type="radio" name="answerIndex" value="1" {...register('answerIndex', { required: true })}  defaultChecked/>
                    <label  htmlFor="">Respuesta 1</label>
                    </div>
                    <div>
                    <input type="radio" name="answerIndex" value="2" {...register('answerIndex', { required: true })} />
                        <label htmlFor="">Respuesta 2</label>
                    </div>
                    <div>
                    <input type="radio" name="answerIndex" value="3"  {...register('answerIndex', { required: true })}/>
                    <label htmlFor="">Respuesta 3</label>
                    </div>
                </div>


            </div>
        </div>
        
    </form>

    </div>

    <ToastContainer position="bottom-right"></ToastContainer>

    </> );
}
 
export default Form;