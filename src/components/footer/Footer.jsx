import React, {useContext} from 'react';
import cl from "./Footer.module.css"
import {LangContext} from "../../context/LangContext";


const Footer = ({id}) => {
    const {lang} = useContext(LangContext)

    return (
        <footer id={id} className={cl.footer}>
            <div className={cl.content}>
                <div className={cl.socials}>
                    <a href={"https://vk.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-vk"></i></a>
                    <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
                    <a href={"https://www.youtube.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className={cl.text}>
                    <p>{lang === 'ru' ? "Конфиденциальность" : "Privacy"}</p>
                    <p>{lang === 'ru' ? "Условия пользования" : "Terms of Use"}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;