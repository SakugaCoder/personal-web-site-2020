import React from "react";
import Title from "./Title";
import '../scss/Work.scss';

export default function Work(){

    const jobList = [
        {
            title: 'Desarrollador Frontend',
            company: 'TSM',
            period: 'Jul 2021 - Presente - 7 meses, El Márques',
            details: 'Mejore, desarrolle y prototipe interfaces de usuario para un sistema web de administración de llantas utilizando diseño web responsivo. Construí una PWA para el mismo sistema web. Desarrolle un sitio web para la documentación de procesos de la empresa utilizando React, React Router y Styled Components.'
        },
        {
            title: 'Frontend Developer Intern',
            company: 'OCCMundial',
            period: 'Abr 2021 - Jun 2021 - 3 meses, Querétaro',
            details: 'Capacitación en tecnologías web: JavaScript, React, Redux, Node Js, Git. Resolución de problema en librería open source OCCATomic e implementación en base de código principal.'
        },
        {
            title: 'Desarrollador Jr',
            company: 'HRP Consulting Services',
            period: 'Dic 2020 - Abr 2021 - 4 meses, Querétaro',
            details: 'Desarrollo de paginas web utilizando WordPress. Implementación de un sistema de venta de cursos con PayPal. Desarrollo de un web Scraper con Python y Selenium para obtener datos en las tarjetas de resultados de búsqueda de Google.'
        },
        {
            title: 'Desarrollador web Jr',
            company: 'PPSTI',
            period: 'Ago 2019 - Oct 2020 - 1 año 3 meses, Querétaro',
            details: 'Desarrollo FrontEnd con JavaScript y JQuery. Implementación de diversas funcionalidades de la UI por medio de llamadas a una RESTful API usando JQuery & Postman. Además de resolución de problemas de implementación de librerías de JavaScript.'
        },

    ]
    return(
        <div className="work" id="work">
            <Title text='Donde he trabajado'></Title>

            <div className="job-list">
                { jobList.map( (job, i) => {
                    return <div className="job-item" key={i}>
                        <div className="job-item-content">
                            <h3> { job.title} </h3>
                            <h4> { job.company } </h4>
                            <h6> { job.period } </h6>
                            <p> { job.details }</p>
                        </div>
                    </div>
                }) }
            </div>
        </div>
    );
}