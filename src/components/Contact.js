import React from 'react';
import '../scss/Contact.scss';
import { useTranslation } from 'react-i18next';

import Title from './Title';

import Button from './Button';

function Contact(){

    const handleChange = (e) => { 


    };

    const { t } = useTranslation();
    return(
        <section className="contact" id="contact">
            <Title text={t('contact-me')} color='dark'></Title>
            <div className='contact-container'>

                <div className="contact-info">
                    <div className="contact-info-item">
                        <div className='contact-info-item-img'>
                            <img src='./assets/images/email-icon.svg' alt='Email icon'/>
                        </div>

                        <span className='contact-info-item-text'>
                            diego.bocanegra.trenado@gmail.com
                        </span>
                    </div>
                    <div className="contact-info-item">
                        <div className='contact-info-item-img'>
                            <img src='./assets/images/location-icon.svg' alt='Location icon'/>
                        </div>

                        <span className='contact-info-item-text'>
                            Monterrey, Mexico
                        </span>
                    </div>
                    <div className="contact-info-item">
                        <div className='contact-info-item-img'>
                            <img src='./assets/images/telephone-icon.svg' alt='Telephone icon'/>
                        </div>

                        <span className='contact-info-item-text'>
                            +52 448 101 5744
                        </span>
                    </div>
                </div>
                <form name="contact" action="mailto:diego.bocanegra.trenado@gmail.com"  method="post" encType="text/plain">
                    <input type="text" id="name" name="name" placeholder={t('name')}  onChange={handleChange}></input>
                    <div className="main-data">
                        <input type="email" id="mail" name="mail" placeholder={t('email')} onChange={handleChange}></input>
                        <input type="text" id="tel" name="tel" placeholder='Telefono'  onChange={handleChange}></input>
                    </div>
                    <div className="message">
                        <textarea type="text" id="comment" name="comment" placeholder={t('message')} onChange={handleChange}></textarea>
                    </div>
                    <div className="btn-form">
                        <Button type='reset' text={t('reset')} color='secondary'></Button>            
                        <Button type='submit' text={t('send')} color='primary'></Button>
                    </div>
                </form>

            </div>
        </section>
    );
}

export default Contact;      