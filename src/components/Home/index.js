import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import Loader from 'react-loaders';


const Home = () => {
    const [letterClass, /*setLetterClass*/] = useState('text-animate');
    const nameArray = [' ', 'P', 'e', 'd', 'r', 'o', ' ', 'H', '.', 'C', ' ', 'd', 'a', ' ', 'S', 'i', 'l', 'v', 'a'];
    const jobArray = ['D', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r', ' ', 'w', 'e', 'b'];

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>Olá, <br /> Eu sou
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} /></h1>
                    <h2>Desenvolvedor Front-End / Youtuber</h2>
                    <Link to="/contato" className='flat-button'>Me Contate</Link>
                </div>
            </div>
        </>
    )
}

export default Home;