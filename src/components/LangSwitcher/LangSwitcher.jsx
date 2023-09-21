import React, {useEffect} from 'react';
import cl from "./LangSwitcher.module.css"
import classNames from "classnames";
import {useTranslation, useTranslationChange} from "i18nano";


const LangSwitcher = ({className, text}) => {
    const lang = useTranslationChange()
    const localText = useTranslation()

    useEffect(() => {
        if (!lang.lang) lang.change(localStorage.getItem('lang'))
    })

    useEffect(() => {
        localStorage.setItem('lang', lang.lang)
    }, [lang.lang])

    const switchLang = () => {
        lang.change(lang.lang === 'ru' ? "en" :  "ru")
    }

    return (
        <p className={classNames(cl.lang, className)} onClick={switchLang}>
            {text ? localText('lang') + ": " : null}

            <span className={text ? cl.underline : null}>{text ? localText('langName') : lang.lang}</span>
        </p>
    );
};

export default LangSwitcher;