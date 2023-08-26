import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import Coin from "../pages/Coin/Coin";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
        <Route index element={<Home />}/>
        <Route path=":coinName" element={<Coin />}/>
    </Route>
));


const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;