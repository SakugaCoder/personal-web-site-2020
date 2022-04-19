import React, { useState } from 'react';
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
    };

    const { t } = useTranslation();
    const [checkboxState, setCheckboxState] = useState(false);

    const closeMenu = () => setCheckboxState(false);

    return(
        <header>
            <nav>
                <div className="brand">
                    <a href="/"><h1>{t('brand')}</h1></a>
                </div>
                <input type='checkbox' id='menu-checkbox' checked={checkboxState} onChange={ (event) => setCheckboxState(event.target.checked) } />


                <label htmlFor='menu-checkbox' className='menu-logo' id='menu-logo'>
                    <div className='line line-1'></div>
                    <div className='line line-2'></div>
                </label>
                
                <ul className='navbar-nav'>
                    <li><button onClick={ () => { scroll('about'); closeMenu(); }}>{t('about') }</button></li>
                    <li><button onClick={ () => { scroll('projects'); closeMenu(); }}>{t('projects')}</button></li>
                    <li><button onClick={ () => { scroll('contact'); closeMenu(); }}>{t('contact')}</button></li>
                    <li> <a className='btn btn-primary btn-cv' href={t('cv-pdf')}> {t('cv')} </a></li>
                </ul>


            </nav>  
        </header>
    )
    }

export default Header;
