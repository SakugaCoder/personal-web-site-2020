import React from 'react';
import '../scss/About.scss';
import Title from './Title';
import { useTranslation } from 'react-i18next';

function About(){
    const { t } = useTranslation();
    return(
        <div className="about" id="about">
            <div className="content">
                <div className="section-title">
                    <Title text={t('about-title')} />
                </div>

                <div className="about-content">
                    <div className="text-content">
                        <p>
                            {t('about-me')}
                        </p>
                    </div>
                    <div className="personal-picture img-circle"></div>
                </div>
                
                
            </div>
            
        </div>
        
    );
}


export default About;