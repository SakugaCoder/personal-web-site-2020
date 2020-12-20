import React from 'react';
import '../scss/Button.scss';

function Button(props){
    const btn_clases = `btn btn-${props.type}`;
    return(
        <a className={btn_clases} href={props.url}>{props.text}</a>
    );
}

export default Button;