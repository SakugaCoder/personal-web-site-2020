import React from 'react';
import ProjectCard from './ProjectCard';
import '../scss/RecentProjects.scss';
import { useTranslation } from 'react-i18next';

import Title from './Title';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

function RecentProjects(){
    const { t } = useTranslation();
    return(
        
            <div className="recent-projects" id="projects">
                <ScrollAnimation animateIn='fadein'>
                    <Title text={t('recent-projects')} ></Title>           
                </ScrollAnimation>
                
                <div className="recent-projects-cards">
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        
    );
}

export default RecentProjects;