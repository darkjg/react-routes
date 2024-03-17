import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"
//( id, name, image, description, url)
function Projects() {
    return (
        <>
            <ul>
                {projects.map((project) => (
                    <li id={`${project.id}`}>
                        <p>Nombre del proyecto:{project.name}</p>
                        <img src={`${project.image}`} alt="imagen del proyecto" />
                        <p>Descripcion del proyecto:{project.description}</p>
                        <Link to={`${project.url}`}>Enlace al proyecto</Link>
                    </li>
                ))}
            </ul>
            <p><Link to={"/"}>Home</Link></p>
        </>
    )
}

export default Projects;
