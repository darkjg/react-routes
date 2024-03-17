import React, { useState, useEffect } from "react"
import { studies, experiences } from "../data/resume"
import { Link } from 'react-router-dom';

//studies (id, title, institution, date)
// experiences (id, title, company, date).
function Resume() {
    return (
        <>
            <h3>Estudios</h3>
            <ul>

                {studies.map((studie) => (
                    <li id={`${studie.id}`}>
                        <p>Titulo:{studie.title}</p>
                        <p>Lugar:{studie.institution}</p>
                        <p>Fecha:{studie.date}</p>

                    </li>
                ))}
            </ul>
            <h3>Expreriencia laboral</h3>
            <ul>
                {experiences.map((experience) => (
                    <li id={`${experience.id}`}>
                        <p>Puesto:{experience.title}</p>
                        <p>Empresa:{experience.company}</p>
                        <p>Duracion:{experience.date}</p>
                    </li>
                ))}
            </ul>
            <p><Link to={"/"}>Home</Link></p>
        </>
        
    )
}

export default Resume;
