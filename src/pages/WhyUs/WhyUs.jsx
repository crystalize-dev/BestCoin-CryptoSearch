import React from 'react';
import cl from "./WhyUs.module.css"
import arm from "../../img/arm.png"
import {useTranslation} from "i18nano";


const WhyUs = ({id}) => {
    const text = useTranslation()

    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <h1>{text("why.header.uncolored")} <span>{text('why.header.colored')}</span></h1>

                <div className={cl.content}>
                    <div className={cl.cardArea}>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-wallet"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{text('why.card1.header')}</h2>
                                <p>{text('why.card1.text')}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-pen-ruler"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{text('why.card2.header')}</h2>
                                <p>{text('why.card2.text')}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-bolt"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{text('why.card3.header')}</h2>
                                <p>{text('why.card3.text')}</p>
                            </div>
                        </div>
                    </div>

                    <img alt={"arm"} src={arm} draggable={false}/>

                    <div className={cl.cardArea}>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-satellite-dish"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{text('why.card4.header')}</h2>
                                <p>{text('why.card4.text')}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-chess-knight"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{text('why.card5.header')}</h2>
                                <p>{text('why.card5.text')}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-boxes-stacked"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{text('why.card6.header')}</h2>
                                <p>{text('why.card6.text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;