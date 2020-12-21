import React from 'react';
import '../scss/Header.scss';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { scroller } from 'react-scroll';



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
                        <li style={ {marginRight: 10} }>
                            <select id='selectLanguague' onChange={props.handleLanChange} autoFocus={true}>
                                <option value="en">{t('en')}</option>
                                <option value="es">{t('sp')}</option>
                                <option value="jp">{t('jp')}</option>
                            </select>
                            <label htmlFor='selectLanguague'>
                                <span className='fa fa-chevron-down'></span>
                            </label>
                            
                        </li>
                        <li> <Button ukr='cv.pdf' text='RESUME' color='primary'></Button></li>
                    </ul>
                </nav>  
            </header>
        )
    }

export default Header;
