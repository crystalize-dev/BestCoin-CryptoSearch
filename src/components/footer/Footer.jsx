import React from 'react';
import cl from "./Footer.module.css"


const Footer = ({id}) => {
    return (
        <div id={id} className={cl.footer}>
            <div className={cl.content}>
                <div className={cl.socials}>
                    <a href={"https://vk.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-vk"></i></a>
                    <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-discord"></i></a>
                    <a href={"https://www.youtube.com/"} target={"_blank"} rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className={cl.text}>
                    <p>Privacy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;