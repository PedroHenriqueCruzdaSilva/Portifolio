import { faCss3, faHtml5, faJava, faJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';

const Sobre = () => {
    return (
        <>
            <div className='container sobre-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArray={['S', 'o', 'b', 'r', 'e', ' ', 'm', 'i', 'm']} idx={15} />
                    </h1>
                    <p>Sou Pedro Henrique Cruz da Silva, desenvolvedor Front-End, estou a me especializar com o React.js pois tenho mais facilidade com o React, e prefiro usar o JavaScript doque o TypeScript. Sou youtuber e no meu canal eu posto vídeos de Filosofia e de vez em quando sobre programação, minha atividade favorita no tempo livre é programar algo, como esse portifólio, mas tenho uma condição mental que se chama "áfantasia", que me impede de imaginar.
                    </p>
            </div>

            <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJs} color="rgb(216, 151, 0)" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJava} color="#DD0031" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faPhp} color="#491095" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Sobre;