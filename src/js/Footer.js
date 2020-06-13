import React from 'react';
import '../scss/Footer.scss';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <p className="footer-content">
                    <div className="footer-text">
                        <b>2020.</b> Developed by <b>Diego Fernando Bocanegra Trenado</b>
                    </div>
                    <div className="footer-social-media">
                        <a href="https://github.com/sakugaCoder" target="_blank"><i className="fa fa-github-square fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/diego-fernando-bocanegra-trenado-169022171" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a>
                        <a href="https://twitter.com/DiegoFernandoBT" target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com/__fernandotrenado__/" target="_blank"><i className="fa fa-instagram fa-2x"></i></a>
                    </div>
                    
                </p>
            </footer>
        );
    }
}

export default Footer;