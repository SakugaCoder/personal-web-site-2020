import React from 'react';
import ProjectCard from './ProjectCard';
import '../scss/RecentProjects.scss';
import { useTranslation } from 'react-i18next';

function RecentProjects(){
    const { t } = useTranslation();
    return(
        <div className="recent-projects" id="projects">
            <div className="title">
                <h2>{t('recent-projects')}</h2>
            </div>
            <div className="recent-projects-cards">
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
}

export default RecentProjects;