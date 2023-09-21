import React from 'react';
import cl from "./Greetings.module.css"
import bitcoin from "../../img/currencies/bitcoin.png"
import etherium from "../../img/currencies/etherium.png"
import {Link} from "react-router-dom"
import Loader from "../../components/loader/Loader";
import {numberWithCommas} from "../../utility/numberWithCommas";
import {useFetch} from "../../hooks/useFetch";
import {useTranslation} from "i18nano";


const Greetings = () => {
    const {data, coinsLoad} = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false")
    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.textArea}>
                    <img alt={"btc"} src={bitcoin} draggable={false}/>
                    <div>
                        <h1>{text('greeting.uncolored')}</h1>
                        <h1><span>{text('greeting.colored')}</span></h1>
                    </div>
                    <img alt={"eth"} src={etherium} draggable={false}/>
                </div>

                {coinsLoad
                    ?
                    <Loader/>
                    :
                    <div className={cl.exchange}>
                        {data.map(currency =>
                            <Link to={currency.name} className={cl.exchangeItem}
                                  key={currency.name}>
                                <img alt={"coin"} src={currency.image} draggable={false}/>
                                <h1>
                                    {currency.name}
                                    <span
                                        className={currency.market_cap_change_percentage_24h < 0 ? cl.redText : cl.greenText}>
                                      {currency.market_cap_change_percentage_24h < 0
                                          ?
                                          <i className="fa-solid fa-caret-down"></i>
                                          :
                                          <i className="fa-solid fa-caret-up"></i>}
                                        {currency.market_cap_change_percentage_24h.toFixed(2) + "%"}
                                    </span>
                                </h1>
                                <p>{"$" +
                                    numberWithCommas(
                                        currency.current_price.toFixed(2)
                                    )}</p>
                            </Link>)}

                        <a href={"#market"} className={cl.button}>{text('greeting.button')}<i
                            className="fa-solid fa-chevron-down"></i></a>
                    </div>}
            </div>
        </div>
    );
};

export default Greetings;