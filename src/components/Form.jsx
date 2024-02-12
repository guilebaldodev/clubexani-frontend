const Form = () => {
    return ( <>
    <div className="container-form">
    <form className="form">
        <div className="form-title">
        <h3>BANCO DE PREGUNTAS</h3>
        <button>GUARDAR</button>
        </div>
        <div className="pregunta">
            <div className="pregunta-container">

                <div className="pregunta-inputs">
                    <div className="input-config">
                    <label htmlFor="textAreaPregunta">Pregunta</label>
                    <textarea id="textAreaPregunta" placeholder="Ingresa la pregunta" type="text" />
                    </div>
                    
                    <div className="selecteds">
                        <div className="input-config select-config">
                        <label htmlFor="">Area</label>
                        <select name="" id="selectArea">
                            <option value="opcion1">Opcion 1</option>
                        </select>
                        </div>

                        <div className="input-config select-config">
                        <label htmlFor="">Autor</label>
                        <select name="" id="selectAutor">
                            <option value="opcion1">Opcion 1</option>
                        </select>
                        </div>

                    </div>
                </div>

                <div className="pregunta-img">
                    <div className="circular-div">
                        <img src="./add-img.png" alt="" />
                    </div>
                    <p>Añade una imagen</p>
                </div>

            </div>
            <div className="respuestas">
            <div className="respuestas-container">
                <div className="textarea-duo">
                    <label htmlFor="">Respuesta 1</label>
                    <textarea placeholder="Ingresa la respuesta 1" name="" id="" cols="30" rows="10"></textarea>

                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Explicacion</label>
                    <textarea  placeholder="Ingresa la explicacion "name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="textarea-duo">
                    <label htmlFor="">Respuesta 2</label>
                    <textarea placeholder="Ingresa la pregunta 2" name="" id="" cols="30" rows="10"></textarea>

                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Explicacion</label>
                    <textarea placeholder="Ingresa la explicacion" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Respuesta 3</label>
                    <textarea placeholder="Ingresa la respuesta 3" name="" id="" cols="30" rows="10"></textarea>

                </div>
                <div className="textarea-duo">
                    <label htmlFor="">Explicacion</label>
                    <textarea placeholder="Ingresa la explicacion" name="" id="" cols="30" rows="10"></textarea>
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
                        <select name="" id="">
                            <option className="option-select" value="">Opcion 1</option>
                        </select>
                    </div>
                    <div className="textarea-duo">
                        <label htmlFor="">Tema 2</label>
                        <select name="" id="">
                            <option value="">Opcion 1</option>
                        </select>
                    </div>
                    <div className="textarea-duo">
                        <label htmlFor="">Tema 3</label>
                        <select name="" id="">
                            <option value="">Opcion 1</option>
                        </select>
                    </div>
                </div>

                
                <div className="options-radio">
                    <p>Escoje la respuesta correcta</p>
                    <div>
                    <input type="radio" />
                        <label htmlFor="">Respuesta 1</label>
                    </div>
                    <div>
                    <input type="radio" />
                        <label htmlFor="">Respuesta 2</label>
                    </div>
                    <div>
                    <input type="radio" />
                    <label htmlFor="">Respuesta 3</label>
                    </div>
                </div>


            </div>
        </div>
        
    </form>

    </div>


    
    </> );
}
 
export default Form;