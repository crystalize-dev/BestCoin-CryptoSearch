import React from 'react';
import {useInView} from "react-intersection-observer";
import cl from "./Home.module.css"
import Header from "../components/header/Header";
import Greetings from "./Greetings/Greetings";
import Market from "./Market/Market";
import WhyUs from "./WhyUs/WhyUs";
import Join from "./Join/Join";
import Footer from "../components/footer/Footer";


const Home = () => {
    const {ref, inView} = useInView();

    return (
        <>
            <div className={cl.wrapper}>
                <div className={cl.invisibleAnchor} ref={ref} id={"home"} />

                <Header onTop={inView} />

                <Greetings />

                <Market id={"market"} />

                <WhyUs id={"why"} />

                <Join id={"join"} />

                <Footer id={"end"} />
            </div>
        </>
    );
};

export default Home;