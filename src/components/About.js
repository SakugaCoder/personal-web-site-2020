import React from 'react';
import '../scss/About.scss';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';


function About(){
    const { t } = useTranslation();
    return(
        <div className="about" id="about">
            <div className="content">
                <div className="about-content">
                    <Fade bottom delay={500}>
                        <div className="personal-picture img-circle"></div> 
                    </Fade>
                    <Fade bottom delay={700}>
                        <div className="text-content">
                            <div className="section-title">
                                <Title text={t('about-title')} />
                            </div>
                            <p>
                                {t('about-me-1')}
                            </p>

                            <p>
                                {t('about-me-2')}
                            </p>

                            <p>
                                {t('about-me-3')}
                            </p>

                            <div className='tech-stack-list'>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>WordPress</li>
                                </ul>
                                <ul>
                                    <li>JavaScript (ES6)</li>
                                    <li>React</li>
                                    <li>Node.Js</li>
                                </ul>
                            </div>
                        </div>
                    </Fade>
                </div>
                
                
            </div>
            
        </div>
        
    );
}


export default About;