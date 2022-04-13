import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher(props){
    const { t } = useTranslation(); 
    return(
        <li className='languague-select'>
            <select id='selectLanguague' onChange={props.handleLanChange} autoFocus={true}>
                <option value="en">{t('en')}</option>
                <option value="es">{t('sp')}</option>
                <option value="jp">{t('jp')}</option>
            </select>
        </li>
    );
}