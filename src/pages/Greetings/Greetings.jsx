import React, {useEffect, useState} from 'react';
import cl from "./Greetings.module.css"
import bitcoin from "../../img/currencies/bitcoin.png"
import etherium from "../../img/currencies/etherium.png"
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {currencies} from "../../hardcode/currencies";


const Greetings = () => {
    const navigate = useNavigate()

    const [data, setData] = useState(currencies);
    const [coinsLoad, setCoinsLoad] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:3001/currencies4");
    //
    //             setData(response.data);
    //             console.log(response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //
    //     setCoinsLoad(true)
    //     fetchData().then(() => {
    //         setCoinsLoad(false)
    //     });
    // }, []);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.textArea}>
                <img alt={"btc"} src={bitcoin} draggable={false}/>
                <div>
                    <h1>TRACK AND TRADE </h1>
                    <h1><span>CRYPTO CURRENCIES</span></h1>
                </div>
                <img alt={"eth"} src={etherium} draggable={false}/>
            </div>

            <div className={cl.exchange}>
                {data.map(currency =>
                    <div onClick={() => navigate(`/${currency.name}`)} className={cl.exchangeItem} key={currency.name}>
                        <img alt={"coin"} src={currency.image} draggable={false}/>
                        <h1>
                            {currency.name}
                            <span className={currency.market_cap_change_percentage_24h < 0 ? cl.redText : cl.greenText}>
                                {currency.market_cap_change_percentage_24h.toFixed(2) + "%"}
                            </span>
                        </h1>
                        <p>{"$" +
                            numberWithCommas(
                                currency.current_price.toFixed(2)
                            )}</p>
                    </div>)}

                <a href={"#market"}>See Prices <i className="fa-solid fa-chevron-down"></i></a>
            </div>
        </div>
    );
};

export default Greetings;