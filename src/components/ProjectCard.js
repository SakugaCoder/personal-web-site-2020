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
        const isEven = (index % 2) === 0;
    return  <div key={index} className="card"> <div className={`card-content ${!isEven ? 'card-content-left' : ''}`}>
    
        <div className="card-image" style={ {backgroundImage: "url("+project.img+")", backgroundSize: "cover", backgroundRepeat:"no-repeat"} }>
            <div className="card-overlay"></div>
        </div>
        

        <div className="card-body">
            <h3 className={`card-title ${isEven ? 'card-text-right' : 'card-text-left'}`}>
                {project.name}
            </h3>

            <p className={`card-text ${isEven ? 'card-text-right' : 'card-text-left'}`}>
                {project.description}
            </p>

            <h4 className={`card-subtitle ${isEven ? 'card-text-right' : 'card-text-left'}`}>
                {project.tech.split(',').map( (item,i) =>{
                    return <span className='tech-label' key={i}>{ item }</span>
                })}
            </h4>

            <div className={`card-footer ${isEven ? 'links-right' : 'link-left'}`}>
                <div className='links'>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill='#000' xmlns="http://www.w3.org/2000/svg" className='github-icon'>
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path fillRule="nonzero" d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/>
                            </g>
                        </svg>
                    </a>

                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" className='external-link-icon' xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
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