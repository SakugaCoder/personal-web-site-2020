import React from 'react'
import '../scss/Hero.scss';
import Button from './Button';
import { useTranslation} from 'react-i18next';

function Hero(){

    const {t} = useTranslation();
    return(     
        <div className="hero">
            <div className='hero-content'>
                <div className="hero-info">
                    <div className="hero-details">
                        <h2 className="rol">FRONTEND DEVELOPER</h2>
                        <h2 className="name">{t('full-name')}</h2>
                        <p className="goal">{t('goal')}</p>

                        <Button text={t('contact')} type="primary" color='primary' url="#contact" ></Button>
                        <Button text={t('hire')} type="secondary" color='secondary' url="#contact"></Button>

                        <div className="social-media">
                            <a href="https://www.linkedin.com/in/diego-fernando-bocanegra-trenado-169022171" target="_blank" rel="noopener noreferrer" className='social-media-item'>
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"/></svg>
                            </a>

                            <a href="https://github.com/sakugaCoder" target="_blank" rel="noopener noreferrer" className='social-media-item'>
                                <svg viewBox="0 0 24 24" fill='#000' xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path fill-rule="nonzero" d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"/>
                                    </g>
                                </svg>
                            </a>

                            <a href="https://twitter.com/DiegoFernandoBT" target="_blank" rel="noopener noreferrer" className='social-media-item'>
                                <svg id='twitter-logo' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="ic-social-media-twitter"><path class="cls-1" d="M29.24,7.92a11.24,11.24,0,0,1-3.17.8A5.79,5.79,0,0,0,28.45,5.8,11.12,11.12,0,0,1,25,7.13,5,5,0,0,0,21.17,5.4a5.34,5.34,0,0,0-5.43,5.3,3.69,3.69,0,0,0,.13,1.19A14.47,14.47,0,0,1,5,6.46a4.22,4.22,0,0,0-.8,2.65A5.53,5.53,0,0,0,6.6,13.62a7.33,7.33,0,0,1-2.39-.8V13a4.94,4.94,0,0,0,4.11,5.17,5.09,5.09,0,0,1-1.46.13,3,3,0,0,1-1.06-.13,5.29,5.29,0,0,0,5,3.71,10.92,10.92,0,0,1-6.75,2.25A4.52,4.52,0,0,1,2.76,24a15.81,15.81,0,0,0,9.4,2.65c9.93,0,14.44-8.22,14.44-15.24V10.7A10.38,10.38,0,0,0,29.24,7.92Z"/></g></svg>
                            </a>
                        </div>
                    </div>

                    <div className='hero-img-container'>
                        <div className="hero-img"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;