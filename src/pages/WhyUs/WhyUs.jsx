import React, {useContext} from 'react';
import cl from "./WhyUs.module.css"
import arm from "../../img/arm.png"
import {LangContext} from "../../context/LangContext";


const WhyUs = ({id}) => {
    const {lang} = useContext(LangContext)

    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <h1>{lang === "ru" ? "Почему " : "WHY "} <span>{lang === 'ru' ? "мы?" : "CHOOSE US"}</span></h1>

                <div className={cl.content}>
                    <div className={cl.cardArea}>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-wallet"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{lang === "ru" ? "ПОДКЛЮЧИ КОШЕЛЁК" : "CONNECT YOUR WALLET"}</h2>
                                <p>{lang === "ru" ? "Используйте Trust Wallet, Metamask или для подключения к приложению" : "Use Trust Wallet, Metamask or to connect to the app"}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-pen-ruler"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{lang === "ru" ? "СОЗДАЙТЕ СВОЮ ВАЛЮТУ" : "UPLOAD YOUR QUANTITY"}</h2>
                                <p>{lang === 'ru' ? "Загрузите свою криптовалюту и установите название, описание и цену" : "upload your crypto and set a title, description and price"}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-bolt"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{lang === "ru" ? "ЗАРАБАТЫВАЙТЕ НА ТРАНЗАКЦИЯХ" : "CONFIRM TRANSACTION"}</h2>
                                <p>{lang === 'ru' ? "Зарабатывайте, продавая свою криптовалюту на нашей торговой площадке" : "Earn by selling your crypto on our marketplace"}</p>
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
                                <h2>{lang === "ru" ? 'ПОЛУЧИТЕ СВОЙ NFT' : "RECEIVE YOUR OWN NFTS"}</h2>
                                <p>{lang === "ru" ? "Инвестируйте всю свою криптовалюту в одном месте на одной платформе" : "Invest all your crypto at one place on one platform"}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-chess-knight"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{lang === "ru" ? "ВЫХОДИТЕ НА РЫНОК, ЧТОБЫ ПРОДАВАТЬ" : "TAKE A MARKET TO SELL"}</h2>
                                <p>{lang === "ru" ? "Находите и собирайте подходящие коллекции криптовалют для покупки или продажи" : "Discover, collect the right crypto collections to buy or sell"}</p>
                            </div>
                        </div>
                        <div className={cl.card}>
                            <div className={cl.logo}>
                                <i className="fa-solid fa-boxes-stacked"></i>
                            </div>

                            <div className={cl.textArea}>
                                <h2>{lang === "ru" ? "УПРАВЛЯЙТЕ СВОЕЙ КОЛЛЕКЦИЕЙ" : "DRIVE YOUR COLLECTION"}</h2>
                                <p>{lang === "ru" ? "Мы упрощаем обнаружение, инвестирование и управление" : "We make it easy to Discover, Invest and manage"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;