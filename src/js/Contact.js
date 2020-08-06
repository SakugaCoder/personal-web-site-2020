import React from 'react';
import '../scss/Contact.scss';
import { useTranslation } from 'react-i18next';


function Contact(){

    const handleChange = (e) => { 


    };

    const { t } = useTranslation();
    return(
        <div className="contact" id="contact">

            <div className="title">
                <h2>{t('contact-me')}</h2>
            </div>
            <form name="contact" netlify>
                <div className="main-data">
                    <input type="text" id="name" name="name" placeholder={t('name')}  onChange={handleChange}></input>
                    <input type="email" id="email" name="email" placeholder={t('email')} onChange={handleChange}></input>
                </div>
                <div className="message">
                    <textarea id="message" name="message" placeholder={t('message')} onChange={handleChange}></textarea>
                </div>

                <div className="btn-form">
                    <button type="submit" id="btnSend">{t('send')}</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;      