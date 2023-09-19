import React from 'react';
import cl from "./Join.module.css"
import bitcoin from "../../img/currencies/bitcoin.png";
import etherium from "../../img/currencies/etherium.png";
import {useTranslation} from "i18nano";


const Join = ({id}) => {
    const text = useTranslation()

    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.textArea}>
                    <img alt={"btc"} src={bitcoin} draggable={false}/>
                    <div>
                        <h1>{text('join.header.uncolored')}</h1>
                        <h1><span>{text('join.header.colored')}</span></h1>
                        <p>{text('join.description')}</p>
                    </div>
                    <img alt={"eth"} src={etherium} draggable={false}/>
                </div>

                <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer">{text('join.full')}</a>
            </div>
        </div>
    );
};

export default Join;