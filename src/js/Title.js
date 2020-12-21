import React from 'react';
import '../scss/Title.scss';

function Title(props){
    return(
        <div className="title" >
            <hr/>
            <h2>{props.text}</h2>
            <hr/>
        </div>
        
    );
}

export default Title;