import React from 'react';
import '../scss/Header.scss';
import Button from './Button';
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
                        <li><a href="#experience">EXPERIENCE</a></li>
                        <li><a href="#projects">{t('projects')}</a></li>
                        <li><a href="#contact">{t('contact')}</a></li>
                        <li style={ {marginRight: 10} }>
                            <select id='selectLanguague' onChange={props.handleLanChange} autoFocus="true">
                                <option value="en">{t('en')}</option>
                                <option value="es">{t('sp')}</option>
                                <option value="jp">{t('jp')}</option>
                            </select>
                            <label for='selectLanguague'>
                                <span class='fa fa-chevron-down'></span>
                            </label>
                            
                        </li>
                        <li> <Button ukr='cv.pdf' text='RESUME' type='primary'></Button></li>
                    </ul>
                </nav>  
            </header>
        )
    }

export default Header;
