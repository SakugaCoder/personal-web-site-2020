import React from 'react';
import '../scss/About.scss';
import { useTranslation } from 'react-i18next';


function About(){
    const { t } = useTranslation();
    return(
        
        <div className="about" id="about">
            <div className="content">
            <div className="section-title">
            <h2>{t('about-title')}</h2>
            </div>
            
            <div className="personal-picture img-circle">
                <img src="assets/images/me.jpg" alt="Porfile"></img>
            </div>

            <hr></hr>
            
            
            <div className="text-content">
                <p>Deserunt mollit consequat ex ipsum proident do esse Lorem.
                    Cillum consectetur officia nulla commodo velit labore 
                    nostrud eiusmod mollit. Id ipsum laboris nisi aliquip proident nulla.
                    Ex quis enim do dolor aliquip proident cupidatat deserunt sint voluptate 
                    cupidatat. Tempor veniam fugiat officia aliqua et amet ea voluptate eu mollit consequat mollit ullamco anim. Sunt ex aliquip nulla consectetur magna occaecat deserunt id ut deserunt consequat. Fugiat officia quis aute qui enim adipisicing esse nisi laboris enim proident adipisicing laborum. Lorem proident reprehenderit voluptate esse quis officia incididunt nostrud enim. Ex sit incididunt enim nulla eu proident deserunt ut elit tempor id proident quis.
                </p>
            </div>
            </div>
            
        </div>
        
    );
}


export default About;