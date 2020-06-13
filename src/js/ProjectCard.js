import React from 'react';
import '../scss/ProjectCard.scss';

class ProjectCard extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="card-image">
                    <img src="./assets/images/projects/apd.png"></img>
                </div>

                <div className="card-body">
                    <h3 className="card-title">
                        Automotive Parts Detection
                    </h3>
                    <h4 className="card-subtitle">
                        Python, Tensorflow, Google Maps API
                    </h4>

                    <p className="card-text">
                        Image classification model to detect autonomus parts and locate on Google
                        Maps implemented on a tkinter UI.
                    </p>

                    <div className="card-footer">
                        <div className="links">
                        <a href="https://github.com/SakugaCoder/Automotive-parts-detection" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;