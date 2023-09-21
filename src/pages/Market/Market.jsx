import React, {useState} from 'react';
import cl from "./Market.module.css"
import Loader from "../../components/loader/Loader";
import {numberWithCommas} from "../../utility/numberWithCommas";
import {Link} from "react-router-dom";
import classNames from "classnames";
import Pagination from "../../components/pagination/Pagination";
import {useFetch} from "../../hooks/useFetch";
import {useTranslation} from "i18nano";


const Market = ({id}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const {coinsLoad, data} = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    const text = useTranslation()

    return (
        <div id={id} className={cl.wrapper}>
            <div className={cl.container}>
                <h1>{text('market.header')}</h1>

                <div className={coinsLoad ? classNames(cl.table, cl.loading) : cl.table}>
                    <div className={cl.row}>
                        <h1 className={cl.coin}>{text('coin')}</h1>
                        <div className={cl.price}>{text('price')}</div>
                        <div className={cl.change}>{text('24h')}</div>
                        <p>{text('cap')}</p>
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