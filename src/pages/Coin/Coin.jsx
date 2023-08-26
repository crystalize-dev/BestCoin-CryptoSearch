import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import cl from "./Coin.module.css"
import axios from "axios";
import Loader from "../../components/loader/Loader";
import {numberWithCommas} from "../../utility/numberWithCommas";
import DOMPurify from "dompurify";


const Coin = () => {
    const params = useParams()
    const coinName = params.coinName.toLowerCase()

    const [coinData, setCoinData] = useState([])
    const [coinsLoad, setCoinsLoad] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setCoinsLoad(true)

            try {
                const response = await axios.get(`http://localhost:3001/coin?name=${coinName}`);

                setCoinData(response.data);
                setCoinsLoad(false)
            } catch (error) {
                setTimeout(fetchData, 60000);
            }
        };

        fetchData()
    }, [coinName]);

    const h24 = coinData.market_data ? coinData.market_data.price_change_24h : "";

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <Link to={"/"}>Go Back</Link>

                {coinsLoad
                    ?
                    <Loader/>
                    :
                    <div className={cl.content}>
                        <div className={cl.leftBlock}>
                            <img alt={coinData.name} src={coinData.image.large} draggable={false}/>
                            <h1>{coinData.name}</h1>
                            <p>Rank: #{coinData.coingecko_rank}</p>
                        </div>

                        <div className={cl.rightBlock}>
                            <div className={cl.rightBlockHeader}>
                                <p>24h Change:
                                    <span className={h24 >= 0 ? cl.greenText : cl.redText}>
                                        {coinData.market_data ? coinData.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}
                                    </span>
                                </p>
                                <p>
                                    Price:
                                    <span className={cl.greenText}>
                                        {coinData.market_data ? "$" + numberWithCommas(coinData.market_data.current_price.usd.toFixed(2)) : null}
                                    </span>
                                </p>
                                <p>
                                    Symbol:
                                    <span>
                                        {coinData.symbol}
                                    </span>
                                </p>
                            </div>

                            <div className={cl.description}>
                                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coinData.description ? coinData.description.en : ""),}}></p>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Coin;