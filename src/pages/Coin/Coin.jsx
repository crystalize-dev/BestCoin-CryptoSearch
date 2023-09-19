import React from 'react';
import {Link, useParams} from "react-router-dom";
import cl from "./Coin.module.css"
import Loader from "../../components/loader/Loader";
import {numberWithCommas} from "../../utility/numberWithCommas";
import DOMPurify from "dompurify";
import {useFetch} from "../../hooks/useFetch";
import {useTranslation} from "i18nano";
import LangSwitcher from "../../components/LangSwitcher/LangSwitcher";


const Coin = () => {
    const params = useParams()
    const coinName = params.coinName.toLowerCase()
    const {data, coinsLoad} = useFetch(`http://localhost:3001/coin?name=${coinName}`)
    const h24 = data.market_data ? data.market_data.price_change_24h : "";

    const text = useTranslation()

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <Link to={"/"}><i className="fa-solid fa-arrow-left"></i> {text('coin.back')}</Link>

                {coinsLoad
                    ?
                    <Loader/>
                    :
                    <div className={cl.content}>
                        <div className={cl.leftBlock}>
                            <img alt={data.name} src={data.image.large} draggable={false}/>
                            <h1>{data.name}</h1>
                            <p>{text('coin.rank')}: #{data.coingecko_rank}</p>
                        </div>

                        <div className={cl.rightBlock}>
                            <div className={cl.rightBlockHeader}>
                                <LangSwitcher className={cl.langSwitcher}/>
                                <p>{text('24h')}:
                                    <span className={h24 >= 0 ? cl.greenText : cl.redText}>
                                      {h24 < 0
                                          ?
                                          <i className="fa-solid fa-caret-up"></i>
                                          :
                                          <i className="fa-solid fa-caret-down"></i>}
                                        {data.market_data ? data.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}
                                    </span>
                                </p>
                                <p>
                                    {text('price')}:
                                    <span className={cl.greenText}>
                                        {data.market_data ? "$" + numberWithCommas(data.market_data.current_price.usd.toFixed(2)) : null}
                                    </span>
                                </p>
                                <p>
                                    {text('coin.symbol')}:
                                    <span>
                                        {data.symbol}
                                    </span>
                                </p>
                            </div>

                            <div className={cl.description}>
                                <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data.description ? data.description.en : ""),}}></p>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

export default Coin;