import React from 'react';
import cl from "./Home.module.css"
import Header from "../components/header/Header";
import Greetings from "./Greetings/Greetings";
import {useInView} from "react-intersection-observer";
import Market from "./Market/Market";


const Home = () => {
    const {ref, inView} = useInView();

    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.container}>
                    <div className={cl.invisibleAnchor} ref={ref} id={"home"}/>

                    <Header onTop={inView}/>

                    <Greetings />

                    <Market id={"market"}/>
                </div>
            </div>
        </>
    );
};

export default Home;