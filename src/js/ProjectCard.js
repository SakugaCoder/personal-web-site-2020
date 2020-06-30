import React from 'react';
import '../scss/ProjectCard.scss';
import { useTranslation } from 'react-i18next';

function ProjectCard(){
    const { t } = useTranslation();

    const projects_info =[
     {
       name: t('name-project-1'),
       tech: t('tech-project-1'),
       description: t('description-project-1'),
       img: t('img-project-1'),
       github: t('github-project-1')
     },
     {
        name: t('name-project-2'),
        tech: t('tech-project-2'),
        description: t('description-project-2'),
        img: t('img-project-2'),
        github: t('github-project-2')
      },
      {
        name: t('name-project-3'),
        tech: t('tech-project-3'),
        description: t('description-project-3'),
        img: t('img-project-3'),
        github: t('github-project-3')
      }
    ];
    const projects = projects_info.map( (project, index)  => {

    return  <div className="card"> <div className="card-content">
    
        <div className="card-image" style={ {backgroundImage: "url("+project.img+")", backgroundSize: "100% 100%", backgroundRepeat:"no-repeat", width:"200px", height:"200px"} }>
        </div>

        <div className="card-body">
            <h3 className="card-title">
                {project.name}
            </h3>
            <h4 className="card-subtitle">
                {project.tech}
            </h4>

            <p className="card-text">
                {project.description}
            </p>

            <div className="card-footer">
                <div className="links">
                <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square fa-2x"></i></a>
                </div>
            </div>
        </div>
        
    </div></div>;
    });
    return(
        <React.Fragment>
            {projects}
        </React.Fragment>
    );
}

export default ProjectCard;