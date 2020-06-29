import React from 'react';
import '../scss/Contact.scss';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact" id="contact">

                <div className="title">
                    <h2>CONTACT ME</h2>
                </div>
                <form netlify>
                    <div className="main-data">
                        <input type="text" id="name" name="name" placeholder="Name"></input>
                        <input type="email" id="email" name="email" placeholder="Emai"></input>
                    </div>
                    <div className="message">
                        <textarea id="message" name="message" placeholder="Message"></textarea>
                    </div>

                    <div className="btn-form">
                        <button type="submit" id="btnSend">Send</button>
                        <button type="rest" id="btnReset">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;