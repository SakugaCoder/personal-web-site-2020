import React from 'react';
import '../scss/Button.scss';

function Button(props){
    const btn_clases = `btn btn-${props.color}`;
    const b = props.type ? <button type={props.type} className={btn_clases} href={props.url}>{props.text}</button> : <a type={props.type} className={btn_clases} href={props.url}>{props.text}</a>;
    return(
        b
    );
}

export default Button;