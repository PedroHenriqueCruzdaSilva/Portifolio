import '../Sidebar/index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <p>P</p>
            <h1 className='sub-logo'>Pedro</h1>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/sobre">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contato">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
               <a target="_blank" rel='noreferrer' href='https://www.linkedin.com'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a> 
            </li>
            <li>
               <a target="_blank" rel='noreferrer' href='https://github.com/PedroHenriqueCruzdaSilva/Pedro-Henrique-Cruz-da-Silva'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a> 
            </li>
            <li>
               <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UC0XMMGPETmD62ibpj5Nt96A'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a> 
            </li>
            <li>
               <a target="_blank" rel='noreferrer' href='https://twitter.com/MidoroiOfficial'>
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a> 
            </li>
        </ul>
    </div>
    )
}

export default Sidebar;