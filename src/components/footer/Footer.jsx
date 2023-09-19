import React from 'react';
import cl from "./Footer.module.css"
import {useTranslation} from "i18nano";


const Footer = ({id}) => {
    const text = useTranslation()

    return (
        <footer id={id} className={cl.footer}>
            <div className={cl.content}>
                <div className={cl.socials}>
                    <a href={"https://vk.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-vk"></i></a>
                    <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
                    <a href={"https://www.youtube.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className={cl.text}>
                    <p>{text('footer.privacy')}</p>
                    <p>{text('footer.terms')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;