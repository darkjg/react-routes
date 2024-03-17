import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {

    return (
        <>
            <h1>Desarollador</h1>
            <p><Link to={"/projects"}>projects</Link></p>
            <p><Link to={"/resume "}>resume</Link></p>
        </>
    )

}

export default Home;
