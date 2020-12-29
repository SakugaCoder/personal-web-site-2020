import React from 'react'
import '../scss/Hero.scss';
import Button from './Button';
//import { useTranslation } from 'react-i18next';

import { useTranslation} from 'react-i18next';

function Hero(){

    const {t} = useTranslation();
    return(
            
        <div className="hero">
            <div className="hero-info">
                <div className="hero-details">
                    <p className="greeting">{t('salutate')}</p>
                    <p className="name">{t('full-name')}</p>
                    <p className="goal">{t('goal')}.</p>

                    <Button text={t('contact')} type="primary" color='primary' url="#contact" ></Button>
                </div>

                <div className="hero-img">
                </div>
            </div>

            
            <div className="social-media">
                    <a href="https://github.com/sakugaCoder" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/diego-fernando-bocanegra-trenado-169022171" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
                    <a href="https://twitter.com/DiegoFernandoBT" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x"></i></a>
                    <a href="https://www.instagram.com/fernandobt_10/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
                
        </div>
    );
    
}

export default Hero;