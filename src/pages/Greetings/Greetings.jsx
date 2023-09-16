import React, {useContext, useEffect, useState} from 'react';
import cl from "./Greetings.module.css"
import bitcoin from "../../img/currencies/bitcoin.png"
import etherium from "../../img/currencies/etherium.png"
import {Link} from "react-router-dom"
import axios from "axios";
import Loader from "../../components/loader/Loader";
import {numberWithCommas} from "../../utility/numberWithCommas";
import {LangContext} from "../../context/LangContext";


const Greetings = () => {
    const [data, setData] = useState([]);
    const [coinsLoad, setCoinsLoad] = useState(true);

    const {lang} = useContext(LangContext)

    useEffect(() => {
        const fetchData = async () => {
            setCoinsLoad(true)

            try {
                const response = await axios.get("http://localhost:3001/currencies?amount=4");

                setCoinsLoad(false)
                await setData(response.data);
            } catch (error) {
                setTimeout(fetchData, 60000);
            }
        };

        fetchData()
    }, []);

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.textArea}>
                    <img alt={"btc"} src={bitcoin} draggable={false}/>
                    <div>
                        <h1>{lang === "ru" ? "Отслеживай и продавай " : "TRACK AND TRADE "}</h1>
                        <h1><span>{lang === "ru" ? "Криптовалюту" : "CRYPTO CURRENCIES"}</span></h1>
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

                        <a href={"#market"} className={cl.button}>See Prices <i
                            className="fa-solid fa-chevron-down"></i></a>
                    </div>}
            </div>
        </div>
    );
};

export default Greetings;