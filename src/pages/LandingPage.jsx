import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import "../css/landing-page.css";

const LandingPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="landing-page">
        <div className="content-container">
          <div className="landing-hero">
            <div className="landing-hero-img">
              <img src="/img/landing/hero.png" alt="" />
            </div>

            <div className="landing-hero-texts">
              <h3>
                <span className="primary-color">
                  Prepárate para el EXANI III
                </span>
              </h3>
              <h1>INGRESA A UN POSGRADO EN MEXICO</h1>
              <p>
                Prepárate para tu examen de admisión con nuestro curso en línea,
                donde encontrarás una amplia variedad de recursos que te
                permitirán medir y mejorar tus habilidades. Aumenta tus
                posibilidades de éxito en el EXANI III y accede al posgrado que
                deseas.
              </p>
              <div className="landing-hero-buttons">
                <button className="primary">Ver Planes</button>
                <button className="secundary">Probar Curso</button>
              </div>
            </div>
          </div>

          <div className="landing-numbers">
            <div className="landing-number-item">
              <div className="landing-number-img">
                {/* <img src="/icons/landing/users.png" alt="" /> */}
              </div>
              <h3>+1000</h3>
              <p>Usuarios</p>
            </div>

            <div className="landing-number-item">
              <img src="" alt="" />
              <h3>+1500</h3>
              <p>Ejercicios</p>
            </div>

            <div className="landing-number-item">
              <img src="" alt="" />
              <h3>+300</h3>
              <p>Lecciones</p>
            </div>

            <div className="landing-number-item">
              <img src="" alt="" />
              <h3>+250</h3>
              <p>Cuestionarios</p>
            </div>
          </div>

          <div className="landing-cards-container">
            <div className="landing-cards-titles">
              <div className="landing-cards-logo">
                <img src="" alt="" />
              </div>
              <h2>
                Conoce todo lo que <span className="primary-color">Club</span>
                Exani tiene para ti
              </h2>

              <p>
                Hemos desarrollado un programa de preparación enfocado en el
                EXANI III, diseñado para facilitar tu aprendizaje y asegurarte
                de dominar los temas esenciales. Nuestro objetivo es
                proporcionarte los recursos para que superes con éxito tu examen
                de admisión.
              </p>
            </div>

            <div className="landing-cards">
              <div className="landing-card">
                <img src="./icons/landing/test.png" alt="" />
                <h3>Simuladores</h3>
                <p>
                  Realiza simulaciones completas del EXANI III, con preguntas y
                  tiempos similares al examen real.
                </p>
              </div>
              <div className="landing-card">
                <img src="./icons/landing/book.png" alt="" />
                <h3>Lecciones</h3>
                <p>
                  Accede a contenido teórico detallado y estructurado para cada
                  área del EXANI III.
                </p>
              </div>
              <div className="landing-card">
                <img src="./icons/landing/test2.png" alt="" />
                <h3>Cuestionarios</h3>
                <p>
                  Practica de forma interactiva con cuestionarios diseñados para
                  evaluar tus conocimientos.
                </p>
              </div>
              <div className="landing-card">
                <img src="./icons/landing/chart.png" alt="" />
                <h3>Seguimiento de Progreso</h3>
                <p>
                  Monitorea tu avance con reportes personalizados que te
                  mostrarán qué áreas necesitas reforzar.{" "}
                </p>
              </div>
              <div className="landing-card">
                <img src="./icons/landing/light.png" alt="" />
                <h3>Recordatorios y Consejos</h3>
                <p>
                  Recibe notificaciones con recordatorios, consejos y
                  recomendaciones útiles que te ayudarán a estar enfocado.{" "}
                </p>
              </div>
              <div className="landing-card">
                <img src="./icons/landing/medidor.png" alt="" />
                <h3>Exámen Diagnóstico</h3>
                <p>
                  nicia tu preparación con un diagnóstico inicial que te ayudará
                  a identificar tus fortalezas y áreas de oportunidad.{" "}
                </p>
              </div>
            </div>


          </div>
            <div className="landing-sections-container">
              <div className="landing-sections-title">
                <h2>
                  ¿Por qué elegir <span className="primary-color">Exani</span>
                  Exani para prepararte para el EXANI III?
                </h2>
              </div>

              <div className="landing-section">
                <div className="landing-section-texts">
                  <h4>Examenes simuladores</h4>
                  <h3>Prueba tu nivel antes del examen real</h3>
                  <p>
                    Los simuladores de Club Exani te permiten enfrentar
                    escenarios realistas del EXANI III, preparándote para los
                    desafíos que encontrarás en el examen oficial. Practica bajo
                    condiciones reales, detecta áreas de mejora y optimiza tu
                    tiempo de respuesta para maximizar tus posibilidades de
                    éxito.
                  </p>
                  <button>Examen Diagnostico</button>
                </div>

                <div className="landing-section-img">
                  <img src="./img/landing/hero.png" alt="" />
                </div>
              </div>

              <div className="landing-blue">
                <div className="landing-section">
                  <div className="landing-section-img">
                    <img src="./img/landing/hero.png" alt="" />
                  </div>

                  <div className="landing-section-texts">
                    <h4>Lecciones Interactivas
                    </h4>
                    <h3>Domina los temas clave del EXANI III
                    </h3>
                    <p>
                    Las lecciones de Club Exani están diseñadas para que aprendas de manera efectiva cada uno de los temas que verás en el examen. Con explicaciones claras y ejemplos prácticos, podrás comprender incluso los conceptos más complejos.
                    </p>
                    <button>Ver lecciones</button>
                  </div>
                </div>
              </div>

              <div className="landing-section">
                <div className="landing-section-texts">
                  <h4>Tu progreso</h4>
                  <h3>
                  Herramientas de seguimiento avanzadas
                  </h3>
                  <p>
                  Nuestro sistema de seguimiento mide tu progreso en tiempo real, brindándote informes detallados sobre tus avances y recomendaciones personalizadas para que sepas exactamente en qué temas debes mejorar.
                  </p>
                  <button>Ir a plataforma</button>
                </div>

                <div className="landing-section-img">
                  <img src="./img/landing/hero.png" alt="" />
                </div>
              </div>
            </div>



        <div className="testimonials-container">
            <h2>
                Historias de éxito de nuestros estudiantes
            </h2>
            <div className="testimonials">

            <div className="testimonial-item">
                <div className="testimonial-img">
                    <img src="./img/landing/person.jpg" alt="" />
                </div>

                <div className="testimonial-texts">
                    <div className="testimonial-title">
                    <h4>Esteban de Jesus</h4>
                    <p>Estudiante de posgrado en Matematicas, UAGro.</p>
                    </div>
                    <p>
                    <q>
                    Usar Club Exani fue clave para mi preparación para el EXANI III. Las lecciones son súper claras y los simuladores realmente me ayudaron a entender cómo sería el examen. Me sentí más seguro gracias al seguimiento que recibí. ¡Sin duda, les debo mi éxito!
                    </q>
                    </p>

                    <a href="">Ver más</a>

                </div>
                
            </div>

            <div className="testimonial-item">
                <div className="testimonial-img">
                    <img src="./img/landing/person.jpg" alt="" />
                </div>

                <div className="testimonial-texts">
                    <div className="testimonial-title">
                    <h4>Esteban de Jesus</h4>
                    <p>Estudiante de posgrado en Física, ITESM</p>
                    </div>
                    <p>
                    <q>
                    Club Exani me ayudó un montón con mi preparación. Los simuladores eran súper realistas y me permitieron practicar como si ya estuviera en el examen. Además, las lecciones son muy claras y van directo al grano, lo que me hizo sentir mucho más preparado. ¡Lo recomiendo al 100%!
                    </q>
                    </p>
                    <a href="">Ver más</a>

                </div>
                
            </div>

            </div>

        </div>
        </div>
      </div>
        <Footer></Footer>
    </>
  );
};

export default LandingPage;
