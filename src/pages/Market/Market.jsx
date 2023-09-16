import React, {useContext, useEffect, useState} from 'react';
import cl from "./Market.module.css"
import axios from "axios";
import Loader from "../../components/loader/Loader";
import {numberWithCommas} from "../../utility/numberWithCommas";
import {Link} from "react-router-dom";
import classNames from "classnames";
import Pagination from "../../components/pagination/Pagination";
import {LangContext} from "../../context/LangContext";


const Market = ({id}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [coinsLoad, setCoinsLoad] = useState(true)
    const {lang} = useContext(LangContext)

    useEffect(() => {
        const fetchData = async () => {
            setCoinsLoad(true)

            try {
                const response = await axios.get(`http://localhost:3001/currencies?amount=100`);

                setData(response.data);
                setCoinsLoad(false)
            } catch (error) {
                setTimeout(fetchData, 60000);
            }
        };

        fetchData()
    }, []);

    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <h1>{lang === 'ru' ? "Торговая площадка" : "Market update"}</h1>

                <div className={coinsLoad ? classNames(cl.table, cl.loading) : cl.table}>
                    <div className={cl.row}>
                        <h1 className={cl.coin}>{lang === "ru" ? "Валюта" : "Coin"}</h1>
                        <div className={cl.price}>{lang === 'ru' ? "Цена" : "Price"}</div>
                        <div className={cl.change}>{lang === "ru" ? "24ч изменение" : "24h Change"}</div>
                        <p>{lang === "ru" ? "Капитализация" : "Market Cap"}</p>
                    </div>
                    {coinsLoad
                        ?
                        <Loader/>
                        :
                        <>
                            {data.filter((coinAll, index) => (index < currentPage * 10) && (index >= (currentPage - 1) * 10)).map(coin =>
                                <Link to={coin.name} className={cl.row} key={coin.name}>
                                    <div className={cl.coin}>
                                        <img alt={coin.name} src={coin.image}/>
                                        <h1>{coin.name}</h1>
                                    </div>

                                    <div className={cl.price}>{"$ " + coin.current_price.toFixed(2)}</div>

                                    <div
                                        className={coin.market_cap_change_percentage_24h < 0 ? classNames(cl.change, cl.redText) : classNames(cl.change, cl.greenText)}>
                                        {coin.market_cap_change_percentage_24h < 0
                                            ?
                                            <i className="fa-solid fa-caret-down"></i>
                                            :
                                            <i className="fa-solid fa-caret-up"></i>}
                                        {coin.market_cap_change_percentage_24h.toFixed(2) + "%"}
                                    </div>

                                    <p>{"$ " + numberWithCommas(coin.market_cap)}</p>
                                </Link>)}
                        </>}
                </div>

                {!coinsLoad && <Pagination currentPage={currentPage} totalCount={5} setCurrentPage={setCurrentPage}/>}
            </div>
        </div>
    );
};

export default Market;