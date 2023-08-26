import React from 'react';
import cl from "./Pagination.module.css"


const Pagination = ({currentPage, totalCount, setCurrentPage}) => {
    const createButtons = () => {
        let res = []

        for (let i = 1; i < totalCount + 1; i ++) {
            res.push(<button key={i} onClick={() => setCurrentPage(i)} disabled={currentPage === i}>{i}</button>)
        }

        return res
    }

    return (
        <div className={cl.wrapper}>
            {createButtons()}
        </div>
    );
};

export default Pagination;
