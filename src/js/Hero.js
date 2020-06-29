import React from 'react'
import '../scss/Hero.scss';
import { useTranslation } from 'react-i18next';

function Hero(){
        const {t} = useTranslation();
        return(
            
        <div className="hero">
            <div className="hero-info">
                <div className="hero-details">
                    <p>BOCANEGRA TRENADO DIEGO FERNANDO</p>
                    <p>[{t('carrier')}]</p>
                </div>

                <a href="./assets/docs/BTDF_CV_ENG_2.pdf" className="btn-download-cv">
                    <span>{t('cv')}</span> <i className="fa fa-file"></i>
                </a>

            </div>

            
            <div className="social-media">
                    <a href="https://github.com/sakugaCoder" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/diego-fernando-bocanegra-trenado-169022171" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a>
                    <a href="https://twitter.com/DiegoFernandoBT" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                    <a href="https://www.instagram.com/__fernandotrenado__/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
            </div>
                
        </div>
    );
    
}

export default Hero;