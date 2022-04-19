import React from 'react';
import '../scss/Title.scss';

function Title(props){
    return(
        <div className="title" >
            <h2>{props.text}</h2>
        </div>
        
    );
}

export default Title;