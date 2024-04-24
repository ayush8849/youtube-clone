import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
     
    if(!isMenuOpen) return null;
    return(
        <div>
        
       < div className="p-5 shadow-lg w-48  text-lg text-center">
                    <ul className="border-bottom">
            <li> <Link to = "/"> Home </Link></li>
            <li>Shorts</li>
            <li>Subscription</li>
        </ul>
<h1 className="font-bold pt-5">You </h1>
<ul>
<li>Your Channel</li>
<li>History</li>
<li>Playlist</li>
<li>Your Videos</li>
<li>Watch Later</li>
</ul>
<h1 className="font-bold pt-5 pb-2">Explore</h1>
<ul>
<li>Trending</li>
<li>Shopping</li>
<li>Music</li>
<li>Live</li>
<li>Gaming</li>
</ul>
</div>
       
     </div>)
        

    
}
export default Sidebar;