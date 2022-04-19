import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../scss/LanguageSwitcher.scss';

export default function LanguageSwitcher(props){
    const { t } = useTranslation(); 
    const langauges = ['en', 'sp', 'jp'];
    const [languageStatus, setLanguageStatus] = useState({current: 'en', optional: ['sp', 'jp']});
    const [optionalLanguagesVisible, setOptionalLanguagesVisible] = useState(false);

    const changeCurrentLanguage = new_lan => {
        let newLanguageStatus = {
            ...languageStatus,
            current: new_lan,
            optional: langauges.filter( lan => lan !== new_lan)
        };
        props.handleLanChange(new_lan === 'sp' ? 'es' : new_lan);
        setLanguageStatus(newLanguageStatus);
        setOptionalLanguagesVisible(false);
    };
    return(
        <div className='language-select-container'>
            <div className='language-select-content'>
                <div className='language-select'>
                    <div className={`optional-languages ${ optionalLanguagesVisible ? 'show': 'hidden'}`}>
                        { languageStatus.optional.map( (item, i) =>{
                            return(
                            <div className='current-language' style={ {marginBottom: 10} } onClick={ () => changeCurrentLanguage(item)} key={ i }>
                                <img className='flag-img' src={`./assets/images/${item}-flag.png`} alt={item + ' flag'} />
                                <span><p>{t(item)}</p></span>
                            </div>
                            );
                        })}
                    </div>

                    <div className='current-language' style={ {marginBottom: 20} } onClick={ () => setOptionalLanguagesVisible(!optionalLanguagesVisible)}>
                        <img className='flag-img' src={`./assets/images/${languageStatus.current}-flag.png`} alt={languageStatus.current+' flag'} />
                        <span><p>{t(languageStatus.current)}</p></span>
                        <span><img src='./assets/images/Caret_up_font_awesome.svg' alt='Caret up icon' className={`${optionalLanguagesVisible ? 'rotate' : 'normal-pos'}`}/> </span>
                    </div>
                    
                    {/*
                    <select id='selectLanguague' onChange={props.handleLanChange} autoFocus={true}>
                        <option value="en">{t('en')}</option>
                        <option value="es">{t('sp')}</option>
                        <option value="jp">{t('jp')}</option>
                    </select>
                    */}
                </div>
            </div>
        </div>
    );
}