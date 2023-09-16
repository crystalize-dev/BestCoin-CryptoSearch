import React, {useContext, useState} from 'react';
import cl from "./Header.module.css"
import classNames from "classnames";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import {LangContext} from "../../context/LangContext";


const Header = ({onTop}) => {
    const [modalMobile, setModalMobile] = useState(false)
    const {lang} = useContext(LangContext)

    return (
        <>
            <div className={modalMobile ? classNames(cl.modalMobile, cl.show) : cl.modalMobile}>
                <i className={classNames("fa-solid fa-xmark", cl.close)} onClick={() => setModalMobile(false)}></i>

                <a href={"#home"} onClick={() => setModalMobile(false)}>{lang === 'ru' ? 'Главная' : "Home"}</a>
                <a href={"#market"} onClick={() => setModalMobile(false)}>{lang === "ru" ? 'Маркет' : "Market"}</a>
                <a href={"#why"} onClick={() => setModalMobile(false)}>{lang === "ru" ? "Почему мы?" : "Choose us"}</a>
                <a href={"#join"} onClick={() => setModalMobile(false)}>{lang === "ru" ? "Присоединйся" : "Join"}</a>
                <LangSwitcher text={true} className={cl.langSwitcher}/>
                <div className={cl.socialsMobile}>
                    <a href={"https://vk.com/"} target={"_blank"} rel="noreferrer"
                       onClick={() => setModalMobile(false)}><i className="fa-brands fa-vk"></i></a>
                    <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer"
                       onClick={() => setModalMobile(false)}><i className="fa-brands fa-discord"></i></a>
                </div>
            </div>

            <header className={onTop ? cl.header : classNames(cl.header, cl.fixed)}>
                <div className={cl.container}>
                    <h1>BESTCOIN</h1>

                    <ul>
                        <li><a href={"#home"}>{lang === 'ru' ? 'Главная' : "Home"}</a></li>
                        <li><a href={"#market"}>{lang === "ru" ? 'Маркет' : "Market"}</a></li>
                        <li><a href={"#why"}>{lang === "ru" ? "Почему мы?" : "Choose us"}</a></li>
                        <li><a href={"#join"}>{lang === "ru" ? "Присоединйся" : "Join"}</a></li>
                    </ul>

                    <div className={cl.socials}>
                        <LangSwitcher />

                        <a href={"https://vk.com/"} target={"_blank"} rel="noreferrer"><i
                            className="fa-brands fa-vk"></i></a>
                        <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer"><i
                            className="fa-brands fa-discord"></i></a>
                    </div>

                    <div className={cl.openMobile}>
                        <i className="fa-solid fa-bars-staggered hamburger-menu"
                           onClick={() => setModalMobile(true)}></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;