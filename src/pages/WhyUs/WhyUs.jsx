import React from 'react';
import cl from "./WhyUs.module.css"
import arm from "../../img/arm.png"


const WhyUs = ({id}) => {
    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <h1>WHY <span>CHOOSE US</span></h1>

                <div className={cl.content}>
                    <div className={cl.cardArea}>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-wallet"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>CONNECT YOUR WALLET</h2>
                                <p>Use Trust Wallet, Metamask or to connect to the app</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-pen-ruler"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>SELECT YOUR QUANTITY</h2>
                                <p>Upload your crypto and set a title, description and price</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-bolt"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>CONFIRM TRANSACTION</h2>
                                <p>Earn by selling your crypto on our marketplace</p>
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
                                <h2>RECEIVE YOUR OWN NFTS</h2>
                                <p>Invest all your crypto at one place on one platform</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-chess-knight"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>TAKE A MARKET TO SELL</h2>
                                <p>Discover, collect the right crypto collections to buy or sell</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-boxes-stacked"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>DRIVE YOUR COLLECTION</h2>
                                <p>We make it easy to Discover, Invest and manage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;