import React, {useState} from 'react';
import cl from "./Header.module.css"
import classNames from "classnames";


const Header = ({onTop}) => {
    const [modalMobile, setModalMobile] = useState(false)

    return (
        <>
            <div className={modalMobile ? classNames(cl.modalMobile, cl.show) : cl.modalMobile}>
                <i className={classNames("fa-solid fa-xmark", cl.close)} onClick={() => setModalMobile(false)}></i>

                <a href={"#home"} onClick={() => setModalMobile(false)}>Home</a>
                <a href={"#market"} onClick={() => setModalMobile(false)}>Market</a>
                <a href={"#choose"} onClick={() => setModalMobile(false)}>Choose us</a>
                <a href={"#join"} onClick={() => setModalMobile(false)}>Join</a>
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
                        <li><a href={"#home"}>Home</a></li>
                        <li><a href={"#market"}>Market</a></li>
                        <li><a href={"#choose"}>Choose us</a></li>
                        <li><a href={"#join"}>Join</a></li>
                    </ul>

                    <div className={cl.socials}>
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