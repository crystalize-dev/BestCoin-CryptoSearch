import React, {useContext} from 'react';
import cl from "./Join.module.css"
import bitcoin from "../../img/currencies/bitcoin.png";
import etherium from "../../img/currencies/etherium.png";
import {LangContext} from "../../context/LangContext";


const Join = ({id}) => {
    const {lang} = useContext(LangContext)

    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.textArea}>
                    <img alt={"btc"} src={bitcoin} draggable={false}/>
                    <div>
                        <h1>{lang === "ru" ? "ПОДЛЮЧАЙТЕСЬ В" : "JOIN VIA"}</h1>
                        <h1><span>{lang === "ru" ? "ДИСКОРДЕ" : "DISCORD"}</span></h1>
                        <p>{lang === 'ru' ? "Инвестируйте и управляйте всеми своими криптовалютами в одном месте" : "Invest and manage all your crypto at one place"}</p>
                    </div>
                    <img alt={"eth"} src={etherium} draggable={false}/>
                </div>

                <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer">{lang === 'ru' ? "Подключиться" : "Join via Discord"}</a>
            </div>
        </div>
    );
};

export default Join;