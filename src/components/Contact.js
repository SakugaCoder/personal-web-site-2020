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
        <div className="contact" id="contact">
            <Title text={t('contact-me')} color='dark'> </Title>
            
            <form name="contact" action="mailto:diego.bocanegra.trenado@gmail.com"  method="post" encType="text/plain">
                <div className="main-data">
                    <input type="text" id="name" name="name" placeholder={t('name')}  onChange={handleChange}></input>
                    <input type="email" id="mail" name="mail" placeholder={t('email')} onChange={handleChange}></input>
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
    );
}

export default Contact;      