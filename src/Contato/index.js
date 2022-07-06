import React, { useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../components/AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contato = () => {
    const [letterClass, /*setLetterClass*/] = useState('text-animate');
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ytdv88o',
            'template_aoejpx5',
            refForm.current,
            '2JF21ra4ILsohv5uY',
            )
            .then(
                () => {
                    alert('Mensagem Enviada Com Sucesso!');
                    window.location.reload(false);
                },
                () => {
                    alert('Falha Ao Tentar Enviar A Mensagem!');
                    window.location.reload(false);
                }
            )
    }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['M', 'e', ' ', 'c' ,'o', 'n', 't', 'a', 't', 'e']} idx={15}/>
                </h1>
                <p>
                    Não estou interessado em oportunidades freelance no momento. No entanto, se você tiver alguma pergunta,
                    não hesite em contactar-me usando o formulário abaixo também.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input id="from_name" type="text" name='from_name' placeholder='Nome' required />
                            </li>
                            <li className='half'>
                                <input id="email" type="email" name='email' placeholder='email' required />
                            </li>
                            <li>
                                <input id="objetivo" placeholder='Objetivo' type="text" name='subject' required/>
                            </li>
                            <li>
                                <textarea id="mensagem" placeholder='Mensagem' name='message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="Enviar" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contato;