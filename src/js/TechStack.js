import React from 'react';
import '../scss/TechStack.scss';
import { useTranslation } from 'react-i18next';

function TechStack(){

    const { t } = useTranslation();
    return(
        <div className="tech-stack">
            <div className="tech-stack-container">
                    <h2 className="title">{t('tech-stack')}</h2>
                <div className="tech-stack-content">

                </div>
            </div>
            
        </div>
    );
}

export default TechStack;