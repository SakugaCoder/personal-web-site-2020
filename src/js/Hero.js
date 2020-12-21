import React from 'react'
import '../scss/Hero.scss';
import Button from './Button';
//import { useTranslation } from 'react-i18next';


function Hero(){
        //const {t} = useTranslation();
        return(
            
        <div className="hero">
            <div className="hero-info">
                <div className="hero-details">
                    <p className="greeting">Hi, I am</p>
                    <p className="name">Diego Fernando Trenado</p>
                    <p className="goal">I transform ideas into real things.</p>

                    <Button text="CONTACT" type="primary" color='primary' url="#contact" ></Button>
                </div>

                <div className="hero-img">
                </div>

                {/* 
                <a href={t('cv-pdf')} className="btn-download-cv">
                    <span>{t('cv')}</span> <i className="fa fa-file"></i>
                </a>
                */}
            </div>

            
            <div className="social-media">
                    <a href="https://github.com/sakugaCoder" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/diego-fernando-bocanegra-trenado-169022171" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
                    <a href="https://twitter.com/DiegoFernandoBT" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x"></i></a>
                    <a href="https://www.instagram.com/diegofernandobt/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
                
        </div>
    );
    
}

export default Hero;