import React from 'react';
import '../scss/Header.scss';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';



function Header(props){
    const scroll = element => {
        scroller.scrollTo(element,{
            duration: 1000,
            smooth: true,
            offset: -100,
            spy: true
        })
    } 
        const { t } = useTranslation();
        return(
            <header>
                <nav>
                    <div className="brand">
                        <a href="/"><h1>{t('brand')}</h1></a>
                    </div>

                    <ul className='navbar-nav'>
                        <li><button onClick={ () => scroll('about') }>{t('about')}</button></li>
                        <li><button onClick={ () => scroll('projects') }>{t('projects')}</button></li>
                        <li><button onClick={ () => scroll('contact') }>{t('contact')}</button></li>
                        <li> <a className='btn btn-primary btn-cv' href={t('cv-pdf')}> {t('cv')} </a></li>
                    </ul>

                    <span className='menu-logo'>
                        <div className='line'></div>
                        <div className='line'></div>
                    </span>
                </nav>  
            </header>
        )
    }

export default Header;
