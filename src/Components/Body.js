import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = () =>{
    return(
        <div className="flex">
        <Sidebar/>
        <Outlet/>
        <h1>Hello</h1>
        </div>
    )
};
export default Body;
