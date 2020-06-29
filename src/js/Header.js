import React from 'react';
import '../scss/Header.scss';
import { useTranslation } from 'react-i18next';


function Header(props){
    
        const { t } = useTranslation();
        return(
            <header>
                <nav>
                    <div className="brand">
                        <a href="index.html"><h1>{t('brand')}</h1></a>
                    </div>
                    <ul className='navbar-nav'>
                        <li><a href="#about">{t('about')}</a></li>
                        <li><a href="#projects">{t('projects')}</a></li>
                        <li><a href="#contact">{t('contact')}</a></li>
                        <li>
                            <select onChange={props.handleLanChange}>
                                <option value="en">ENG</option>
                                <option value="es">ESP</option>
                                <option value="jp">JAP</option>
                            </select>
                        </li>
                    </ul>
                </nav>  
            </header>
        )
    }

export default Header;
