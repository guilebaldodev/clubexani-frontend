const MedicionLeccion = ({nombre}) => {
  return (
    <>
      <div className="lesson-content">
        <h2>Lección 2: Niveles de Medición de una Variable</h2>

        <h3 className="pb-0">
          ¿Que son los niveles de medicion de una variable?
        </h3>

        <p className="lesson-paragraph ">
          En la investigación científica, medir variables correctamente es
          esencial para recolectar y analizar datos de manera precisa. Cada tipo
          de variable requiere un enfoque específico para su medición. Los
          niveles de medición determinan cómo se pueden clasificar y analizar
          los datos. En esta lección, exploraremos los cuatro niveles de
          medición: nominal, ordinal, intervalo y razón. Comprender estos
          niveles te ayudará a seleccionar las herramientas estadísticas
          adecuadas y a interpretar los resultados de manera correcta.
        </p>

        {/* <div className="note-container">
          <div className="note-title">
            <img src="/icons/lesson/note-icon2.png" alt="" />
            <h4>Nota</h4>
          </div>
          <p>
            Los conceptos de ontología, epistemología y metodología son
            frecuentemente preguntados en el EXANI-III. Asegúrate de
            comprenderlos bien y memorizarlos.
          </p>
        </div> */}

        <h3 className="pb-0">Nivel Nominal: Clasificación Simple</h3>
        <p className="lesson-paragraph pb-0">
          El nivel nominal es el más básico y se refiere a variables que se
          pueden clasificar en categorías distintas sin ningún orden específico.
          En este nivel, las variables son categóricas, y los números o
          etiquetas asignados simplemente sirven para diferenciar entre
          categorías sin implicar ninguna relación cuantitativa. No se pueden
          realizar operaciones matemáticas significativas con los datos
          nominales.
        </p>

        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="" />
            <h4>Ejemplos</h4>
          </div>
          <ul className="lesson-ul ">
            <li>
              <strong>Género:</strong> Masculino, Femenino
            </li>
            <li>
              <strong>Estado civil:</strong> Soltero, Casado, Divorciado
            </li>
            <li>
              <strong>Color de ojos:</strong> Azul, Verde, Marrón
            </li>
          </ul>
        </div>

        <div className="lesson-paragraph  pt-0">
          El nivel nominal es fundamental para clasificar datos en grupos
          distintos. Aunque no ofrece información sobre la magnitud de las
          diferencias entre categorías, permite organizar la información de
          manera que sea más fácil de analizar y compar
        </div>

        <h3 className="pb-0">Nivel Ordinal: Orden con Jerarquía</h3>
        <p className="lesson-paragraph pb-0">
          El nivel ordinal permite ordenar los datos en una secuencia
          jerárquica, pero las diferencias entre las categorías no son uniformes
          ni necesariamente cuantificables. Este nivel proporciona una jerarquía
          de clasificación, permitiendo establecer un ranking entre las
          categorías. Sin embargo, no se pueden realizar cálculos precisos de
          las diferencias entre los niveles.
        </p>

        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="Icono de lupa" />
            <h4>Ejemplos</h4>
          </div>
          <ul className="lesson-ul ">
            <li>
              <strong>Nivel de educación:</strong> Primaria, Secundaria,
              Universidad
            </li>
            <li>
              <strong>Clasificación de satisfacción: </strong> Muy insatisfecho,
              Insatisfecho, Neutral, Satisfecho, Muy satisfecho
            </li>
            <li>
              <strong>Rangos en una competición</strong> 1er lugar, 2do lugar,
              3er lugar
            </li>
          </ul>
        </div>
        <div className="lesson-paragraph  pt-0">
          El nivel ordinal permite ordenar datos y realizar comparaciones de
          rango, proporcionando una perspectiva de la jerarquía y preferencia.
          Sin embargo, no ofrece detalles precisos sobre la magnitud de las
          diferencias entre los niveles.{" "}
        </div>

        <h3 className="pb-0 ">Nivel de Intervalo: Diferencias Consistentes</h3>
        <p className="lesson-paragraph pb-0">
          En el nivel de intervalo, no solo se permite el orden de las
          variables, sino también la medición de la magnitud de las diferencias
          entre ellas. Las diferencias entre los valores son significativas y
          constantes. A pesar de esto, no existe un "cero absoluto" en este
          nivel, lo que significa que no se puede afirmar que un valor es "el
          doble" de otro. Este nivel permite medir y comparar diferencias
          precisas entre valores, lo que es útil para analizar tendencias y
          cambios en los datos, aunque no se puede realizar una comparación de
          múltiplos o proporciones.
        </p>

        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="Icono de lupa" />
            <h4>Ejemplos</h4>
          </div>
          <ul className="lesson-ul">
            <li>
              <strong>Temperatura:</strong> en grados Celsius o Fahrenheit
            </li>
            <li>
              <strong>Fechas:</strong> en un calendario
            </li>
            <li>
              <strong>Escalas de IQ:</strong> coeficiente intelectual
            </li>
          </ul>
        </div>

        <div className="lesson-paragraph pt-0">
          El nivel de intervalo permite realizar análisis detallados de las
          diferencias entre los valores de las variables, aunque no se pueden
          comparar múltiplos o proporciones. Este nivel es especialmente útil
          para observar tendencias y variaciones en los datos.
        </div>

        {/*  */}

        <h3 className="pb-0">Nivel de Razón: Medición Absoluta</h3>
        <p className="lesson-paragraph pb-0">
          El nivel de razón es el más avanzado y combina todas las propiedades
          de los niveles anteriores, además de incluir un "cero absoluto". Esto
          permite realizar operaciones matemáticas completas, como
          multiplicación y división. El nivel de razón proporciona la mayor
          precisión en la medición de variables y permite interpretar las
          diferencias y proporciones entre los valores de manera significativa.
        </p>

        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="Icono de lupa" />
            <h4>Ejemplos</h4>
          </div>
          <ul className="lesson-ul">
            <li>
              <strong>Peso:</strong> en kilogramos o libras
            </li>
            <li>
              <strong>Altura:</strong> en metros o pies
            </li>
            <li>
              <strong>Ingresos:</strong> en dólares
            </li>
          </ul>
        </div>

        <div className="lesson-paragraph pt-0">
          El nivel de razón permite realizar cálculos matemáticos avanzados y
          proporciona una precisión completa en las mediciones. Es esencial para
          análisis detallados y comparaciones proporcionales en investigaciones
          cuantitativas.
        </div>
        {/*  */}
        <h3>Resumen</h3>
        <p className="lesson-paragraph pt-0">
          Conocer los niveles de medición es fundamental para cualquier
          investigación, ya que determina qué tipo de análisis estadístico es
          posible y apropiado. Para visualizar mejor las diferencias entre los
          niveles de medición, la siguiente tabla resume las características
          clave de cada uno:
        </p>

        <table className="lesson-table">
          <thead>
            <tr>
              <th>Nivel</th>
              <th>Características</th>
              <th>Ejemplos</th>
              <th>Operaciones Permitidas</th>
            </tr>
          </thead>
          <tbody>
            <tr className="grey-tr">
              <td>Nominal</td>
              <td>Clasificación sin orden</td>
              <td>Género, Estado civil, Color de ojos</td>
              <td>Comparación de igualdad (igual/diferente)</td>
            </tr>
            <tr>
              <td>Ordinal</td>
              <td>Clasificación con orden</td>
              <td>Nivel de educación, Satisfacción, Rangos en competición</td>
              <td>
                Comparación de orden (mayor/menor), No diferencias precisas
              </td>
            </tr>
            <tr className="grey-tr">
              <td>Intervalo</td>
              <td>Orden con diferencias consistentes</td>
              <td>Temperatura, Fechas, Escala de IQ</td>
              <td>Suma, Resta, Comparación de intervalos</td>
            </tr>
            <tr>
              <td>Razón</td>
              <td>Orden, diferencias consistentes, cero absoluto</td>
              <td>Peso, Altura, Ingresos</td>
              <td>Suma, Resta, Multiplicación, División</td>
            </tr>
          </tbody>
        </table>

        <p className="lesson-paragraph pb-0">
          Cada nivel ofrece herramientas únicas para clasificar y analizar
          datos, desde la clasificación simple en el nivel nominal hasta la
          medición cuantitativa absoluta en el nivel de razón. Comprender estas
          diferencias te permitirá seleccionar las técnicas de análisis
          adecuadas y obtener conclusiones más precisas y útiles de tus datos.
        </p>

        <div className="lesson-done">
          <div className="lesson-title">
            <img src="/icons/lesson/clap-icon.png" alt="" />
            <h4>¡Leccion terminada!</h4>
          </div>
          <p>
          ¡Has completado la lección sobre los niveles de medición de una variable! Ahora comprendes los cuatro niveles de medición: nominal, ordinal, intervalo y razón, y cómo estos determinan el tipo de análisis que puedes realizar con tus datos.
          Es el momento de demostrar lo que has aprendido. Pon a prueba tus conocimientos sobre la clasificación y medición de variables con una pequeña evaluación.</p>
          <button>Iniciar evaluacion</button>
        </div>

        <div className="lesson-buttons-container">
          <button className="desactivate">
            <img src="/icons/lesson/back-icon.png" alt="" />
            Anterior
          </button>
          <button>
            Siguiente
            <img src="/icons/lesson/next-icon.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MedicionLeccion;
