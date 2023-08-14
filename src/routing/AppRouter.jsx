import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Home/>}>
        <Route path=":coinName"/>
    </Route>
));


const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    );
};

export default AppRouter;