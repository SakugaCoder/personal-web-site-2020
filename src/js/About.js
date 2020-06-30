import React from 'react';
import '../scss/About.scss';
import { useTranslation } from 'react-i18next';


function About(){
    const { t } = useTranslation();
    return(
        <div className="about" id="about">
            <div className="content">
                <div className="section-title">
                    <h2>{t('about-title')}</h2>
                </div>
                
                <div className="personal-picture img-circle">
                </div>

                <hr></hr>
                
                
                <div className="text-content">
                    <p>
                        {t('about-me')}
                    </p>
                    
                </div>
            </div>
            
        </div>
        
    );
}


export default About;