import React from 'react';
import ProjectCard from './ProjectCard';
import '../scss/RecentProjects.scss';
import { useTranslation } from 'react-i18next';

import Title from './Title';


function RecentProjects(){
    const { t } = useTranslation();
    return(
        
            <div className="recent-projects" id="projects">
                    <Title text={t('recent-projects')} ></Title>           
                
                <div className="recent-projects-cards">
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        
    );
}

export default RecentProjects;