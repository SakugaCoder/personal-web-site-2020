import React from 'react';
import '../scss/Footer.scss';
import { useTranslation } from 'react-i18next'
function Footer(){
    const { t } = useTranslation();
    return(
        <footer>
            <div className="footer-content">
                <div className="footer-text">
                    <b>2020.</b> {t('developed')} <b>Diego Fernando Bocanegra Trenado</b>
                </div>
                <div className="footer-social-media">
                    <a href="https://github.com/sakugaCoder" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/diego-fernando-bocanegra-trenado-169022171" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x"></i></a>
                    <a href="https://twitter.com/DiegoFernandoBT" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x"></i></a>
                    <a href="https://www.instagram.com/__fernandotrenado__/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram fa-2x"></i></a>
                </div>
            </div>
        </footer>
    );
}


export default Footer;