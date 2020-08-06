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
            <form name="contact" action="mailto:diego.bocanegra.trenado@gmail.com"  method="post" encType="text/plain">
                <div className="main-data">
                    <input type="text" id="name" name="name" placeholder={t('name')}  onChange={handleChange}></input>
                    <input type="email" id="mail" name="mail" placeholder={t('email')} onChange={handleChange}></input>
                </div>
                <div className="message">
                    <textarea type="text" id="comment" name="comment" placeholder={t('message')} onChange={handleChange}></textarea>
                </div>

                <div className="btn-form">
                    <button type="submit" id="btnSend">{t('send')}</button>
                    <button type="reset" name="reset" id="btnReset">Reset</button> 
                </div>
            </form>
        </div>
    );
}

export default Contact;      