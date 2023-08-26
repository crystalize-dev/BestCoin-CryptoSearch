import React from 'react';
import cl from "./Join.module.css"
import bitcoin from "../../img/currencies/bitcoin.png";
import etherium from "../../img/currencies/etherium.png";


const Join = ({id}) => {
    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.textArea}>
                    <img alt={"btc"} src={bitcoin} draggable={false}/>
                    <div>
                        <h1>JOIN US VIA</h1>
                        <h1><span>DISCORD</span></h1>
                        <p>Invest and manage all your crypto at one place.</p>
                    </div>
                    <img alt={"eth"} src={etherium} draggable={false}/>
                </div>

                <a href={"https://discord.com/"} target={"_blank"} rel="noreferrer">Join via Discord</a>
            </div>
        </div>
    );
};

export default Join;