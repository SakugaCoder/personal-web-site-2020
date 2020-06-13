import React from 'react';
import ProjectCard from './ProjectCard';
import '../scss/RecentProjects.scss';

class RecentProjects extends React.Component{
    render(){
        return(
            <div className="recent-projects" id="projects">
                <div className="title">
                    <h2>RECENT PROJECTS</h2>
                </div>
                <div className="recent-projects-cards">
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        );
    }
}

export default RecentProjects;