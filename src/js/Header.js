import React from 'react';
import '../scss/Header.scss'

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <div className="brand">
                        <a href="index.html"><h1>DIEGO FERNANDO</h1></a>
                    </div>
                    <ul className='navbar-nav'>
                        <li>
                            <a href="#">ES <i className="fa fa-caret-down"></i></a>
                            <ul>
                                
                                <ul>
                                    <li><a href="#eng">ENG</a></li>
                                    <li><a href="#esp">ESP</a></li>
                                    <li><a href="#jap">JAP</a></li>
                                </ul>
                            </ul>
                        </li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#projects">PROJECTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>  
            </header>
        )
    }
}

export default Header;
