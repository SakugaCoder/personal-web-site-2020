import React from 'react';
import '../scss/TechStack.scss';

class TechStack extends React.Component{
    render(){
        return(
            <div className="tech-stack">
                <div className="tech-stack-container">
                    <h2 className="title">MY TECH STACK</h2>
                    <img src="./assets/images/ts.png"></img>
                </div>
                
            </div>
        );
    }
}

export default TechStack;