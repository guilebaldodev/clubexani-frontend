import UserHeader from "../components/userHeader";
import '../css/plans-page.css'


const PricingPage = () => {
    return ( 
        <>
    <div className="colum-container">
        <UserHeader></UserHeader>

        <div className="pricing-page-container">
            <div className="pricing-page-titles">
                <h3>Escoge tu plan</h3>
                <p>
                    Elige la duración que mejor se ajuste a tus necesidades. 
                </p>
            </div>
            <div className="pricing-plans-container">
                <div className="plan-item free-plan">
                    <div className="plan-info">
                        <h4>Gratis</h4>
                        <p className="p-100">Explora nuestra plataforma</p>
                        <div className="plan-info-price">
                            <h4>$0</h4>
                        </div>
                        <p className="plan-info-last">Gratis por ahora</p>
                        <button className="plan-button">
                            Plan actual
                        </button>
                    </div>

                    <div className="plan-item-includes">
                        <h4>Incluye:</h4>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Exámenes de simulación: 1</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>4 lecciones</p>
                        </div>

                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>4 cuestionarios de prueba</p>
                        </div>
                    </div>
                </div>

                <div className="plan-item">
                    <div className="plan-info">
                        <h4>Plus</h4>
                        <p className="p-100">Preparación intensiva en un mes. </p>
                        <div className="plan-info-price">
                            <h4>$399</h4>
                        </div>
                        <p className="plan-info-last">1 mes de vigencia</p>
                        <button className="plan-button">
                            Seleccionar plan
                        </button>
                    </div>

                    <div className="plan-item-includes">
                        <h4>Incluye:</h4>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Exámenes de simulación: 3</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso a todas las lecciones</p>
                        </div>

                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso a todos los cuestionarios</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>1 mes de acceso completo</p>
                        </div>
                    </div>
                </div>

                <div className="plan-item">
                    <div className="plan-info">
                        <h4>Pro</h4>
                        <p className="p-100">Para una preparación sólida. </p>
                        <div className="plan-info-price">
                            <h4>$599</h4>
                        </div>
                        <p className="plan-info-last">3 meses de vigencia</p>
                        <button className="plan-button">
                            Seleccionar plan
                        </button>
                    </div>

                    <div className="plan-item-includes">
                        <h4>Incluye:</h4>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Exámenes de simulación: 6</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso a todas las lecciones</p>
                        </div>

                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso a todos los cuestionarios</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>3 meses de acceso completo</p>
                        </div>
                    </div>
                </div>

                <div className="plan-item plan-item-selected">
                    <div className="plan-popular">
                        Más vendido
                    </div>
                    <div className="plan-info">
                        <h4>Elite</h4>
                        <p className="p-100">Prepárate con tranquilidad.</p>
                        <div className="plan-info-price">
                            <h4>$799</h4>
                        </div>
                        <p className="plan-info-last">6 meses de vigencia</p>
                        <button className="plan-button">
                            Seleccionar plan
                        </button>
                    </div>

                    <div className="plan-item-includes">
                        <h4>Incluye:</h4>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Exámenes de simulación: 10</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso a todas las lecciones</p>
                        </div>

                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso a todos los cuestionarios</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>6 meses de acceso completo</p>
                        </div>
                        <div className="plan-include-item">
                            <img src="/icons/check-icon.png" alt="" />
                            <p>Acceso prioritario a nuevas funcionalidades</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

    );
}
 
export default PricingPage;