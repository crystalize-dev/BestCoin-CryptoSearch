import React, {useContext} from 'react';
import cl from "./LangSwitcher.module.css"
import {LangContext} from "../../context/LangContext";
import classNames from "classnames";


const LangSwitcher = ({className, text}) => {
    const {lang, switchLang} = useContext(LangContext)
    const textLocalization = lang === 'ru' ? "Язык: " : "Language: "
    const langLocalization = lang === 'ru' ? 'Русский' : 'English'

    return (
        <p className={classNames(cl.lang, className)} onClick={switchLang}>
            {text ? textLocalization : null}
            <span className={text ? cl.underline : null}>{text ? langLocalization : lang}</span>
        </p>
    );
};

export default LangSwitcher;