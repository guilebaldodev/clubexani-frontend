const LessonParadigmas = () => {
  return (
    <>
      <div className="lesson-content">
        <h2>Paradigmas de la Investigación</h2>

        <h3>Objetivos de Aprendizaje:</h3>
        <ul className="lesson-ul">
          <li>Comprender qué es un paradigma en la investigación.</li>
          <li>
            Conocer los tres principales paradigmas de la investigación:
            positivista, interpretativo y sociocrítico.
          </li>
          <li>
            Entender los conceptos de ontología, epistemología y metodología en
            el contexto de cada paradigma.
          </li>
          <li>
            Diferenciar los enfoques y aplicaciones de los paradigmas en la
            investigación.
          </li>
        </ul>

        <h3 className="pb-0">¿Que son los paradigmas de la investigacion?</h3>

        <p className="lesson-paragraph">
          En el ámbito de la investigación, los paradigmas son marcos teóricos
          que guían cómo los investigadores entienden y estudian los fenómenos.
          Antes de explorar los tres paradigmas principales, es crucial entender
          tres conceptos fundamentales: <strong>ontología</strong>,{" "}
          <strong>epistemología</strong> y <strong>metodología</strong>. Estos
          conceptos definen cómo los investigadores ven la realidad, cómo
          adquieren conocimiento y qué métodos utilizan en sus estudios.
        </p>

        <ol className="lesson-ol">
          <li>
            <div className="counter-ul">1</div>
            <div className="lesson-ol-text">
              <strong>Ontología:</strong>
              <p>
                La ontología se refiere a la naturaleza de la realidad o lo que
                existe. En investigación, este concepto explora cómo percibimos
                la realidad, si es objetiva y externa al observador, o si es
                subjetiva y construida por las percepciones humanas.
              </p>
            </div>
          </li>
          <li>
            <div className="counter-ul">2</div>
            <div className="lesson-ol-text">
              <strong>Epistemología:</strong>
              <p>
                La epistemología se ocupa de cómo conocemos la realidad, es
                decir, cómo se adquiere el conocimiento. Define la relación
                entre el investigador y lo que está estudiando, y determina si
                el conocimiento se puede obtener de manera objetiva o si está
                influenciado por las interpretaciones personales.
              </p>
            </div>
          </li>
          <li>
            <div className="counter-ul">3</div>
            <div className="lesson-ol-text">
              <strong>Metodología:</strong>
              <p>
                La metodología se refiere a los métodos y técnicas que se
                utilizan para investigar y adquirir conocimiento. Los métodos
                pueden ser cuantitativos (como encuestas y experimentos) o
                cualitativos (como entrevistas y estudios de caso), dependiendo
                de cómo el investigador ve la realidad y adquiere conocimiento.
              </p>
            </div>
          </li>
        </ol>

        <div className="note-container">
          <div className="note-title">
            <img src="/icons/lesson/note-icon2.png" alt="" />
            <h4>Nota</h4>
          </div>
          <p>
            Los conceptos de ontología, epistemología y metodología son
            frecuentemente preguntados en el EXANI-III. Asegúrate de
            comprenderlos bien y memorizarlos.
          </p>
        </div>

        <h3>Paradigma Positivista</h3>
        <p>
          El <strong>paradigma positivista</strong> se basa en la idea de que la
          realidad es objetiva y puede ser medida y analizada mediante métodos
          científicos. Este enfoque es característico de las ciencias naturales,
          donde el objetivo es descubrir leyes generales que expliquen los
          fenómenos.
        </p>
        <h4>Características principales:</h4>

        <ul className="lesson-ul pt-16">
          <li>Uso de métodos cuantitativos.</li>
          <li>Búsqueda de la objetividad.</li>
          <li>Enfoque en la verificación de hipótesis y teorías.</li>
          <li>
            <strong>Ontología:</strong> La realidad es objetiva y existe
            independientemente del observador.
          </li>
          <li>
            <strong>Epistemología:</strong> El conocimiento se obtiene a través
            de la observación y la medición empírica.
          </li>
          <li>
            <strong>Metodología:</strong> Se utilizan métodos cuantitativos,
            como experimentos y encuestas, para recolectar datos.
          </li>
        </ul>

        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="" />
            <h4>Ejemplo</h4>
          </div>
          <p>
            Un estudio que mide el impacto de un programa de ejercicio físico en
            la reducción del estrés en un grupo de trabajadores. El investigador
            usa un cuestionario estandarizado para medir los niveles de estrés
            antes y después del programa.
          </p>
        </div>

        <h3>Paradigma Interpretativo</h3>
        <p>
          El <strong>paradigma interpretativo</strong> se centra en comprender
          las experiencias humanas desde la perspectiva de los individuos. Aquí,
          la realidad es vista como subjetiva y construida socialmente. Este
          enfoque es común en las ciencias sociales y humanas.
        </p>
        <h4>Características principales:</h4>

        <ul className="lesson-ul">
          <li>Uso de métodos cualitativos.</li>
          <li>Enfoque en la comprensión profunda de los fenómenos.</li>
          <li>Importancia del contexto en el que ocurren los fenómenos.</li>
          <li>
            <strong>Ontología:</strong> La realidad es subjetiva y depende de
            las percepciones y experiencias de las personas.
          </li>
          <li>
            <strong>Epistemología:</strong> El conocimiento se construye a
            través de la interpretación y comprensión de los significados que
            las personas le dan a sus experiencias.
          </li>
          <li>
            <strong>Metodología:</strong> Se utilizan métodos cualitativos, como
            entrevistas y estudios de caso, para explorar los significados y
            contextos.
          </li>
        </ul>

        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="Icono de lupa" />
            <h4>Ejemplo</h4>
          </div>
          <p>
            Un estudio que explora cómo los estudiantes universitarios de
            diferentes culturas perciben y manejan la ansiedad académica. El
            investigador realiza entrevistas en profundidad para captar las
            experiencias individuales de los estudiantes.
          </p>
        </div>

        <h3>Paradigma Sociocrítico</h3>
        <p>
          El <strong>paradigma sociocrítico</strong> se enfoca en comprender y
          transformar las estructuras sociales y culturales. Este enfoque busca
          identificar y cuestionar las desigualdades y las dinámicas de poder en
          la sociedad, promoviendo una visión crítica que permita el cambio
          social. Los investigadores sociocríticos no solo analizan las
          realidades sociales, sino que también trabajan para empoderar a los
          grupos marginados y fomentar la justicia social.
        </p>
        <h4>Características principales:</h4>
        <ul className="lesson-ul">
          <li>Enfoque en la justicia social y la equidad.</li>
          <li>Uso de métodos tanto cualitativos como cuantitativos.</li>
          <li>
            Crítica a las estructuras de poder y las desigualdades sociales.
          </li>
          <li>
            <strong>Ontología:</strong> La realidad está influenciada por las
            estructuras sociales, económicas y culturales que perpetúan las
            desigualdades.
          </li>
          <li>
            <strong>Epistemología:</strong> El conocimiento se construye a
            través de la crítica y el análisis de las dinámicas de poder y las
            estructuras de opresión.
          </li>
          <li>
            <strong>Metodología:</strong> Se utilizan métodos cualitativos y
            cuantitativos para analizar y desafiar las estructuras sociales.
            También se enfoca en la participación activa y la transformación
            social.
          </li>
        </ul>
        <div className="example">
          <div className="example-title">
            <img src="/icons/lesson/lupa-icon2.png" alt="Icono de lupa" />
            <h4>Ejemplo</h4>
          </div>
          <p>
            Un estudio que investiga cómo las políticas públicas afectan a las
            comunidades desfavorecidas. El investigador no solo analiza datos,
            sino que también trabaja con las comunidades para desarrollar
            estrategias de intervención y promoción de cambios que aborden las
            desigualdades.
          </p>
        </div>

        <h3>Resumen:</h3>
        <p>
          En esta lección, hemos revisado los tres paradigmas principales de la
          investigación: positivista, interpretativo y crítico. Cada uno de
          estos enfoques ofrece una manera distinta de comprender y estudiar la
          realidad. Mientras que el paradigma positivista se centra en la
          objetividad y las leyes generales, el interpretativo valora las
          experiencias subjetivas, y el crítico busca transformar la realidad
          mediante el análisis de las estructuras de poder. Además, hemos
          introducido tres conceptos clave: ontología, epistemología y
          metodología, que son fundamentales para entender cómo cada paradigma
          aborda la investigación.
        </p>

        <div className="lesson-done">
          <div className="lesson-title">
            <img src="/icons/lesson/clap-icon.png" alt="" />
            <h4>¡Leccion terminada!</h4>
          </div>
          <p>
            ¡Has completado esta lección! Ahora es el momento de demostrar lo
            que has aprendido con una pequeña evaluacion. ¿Estás listo para
            poner a prueba tus conocimientos?
          </p>
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

export default LessonParadigmas;
