import React from "react";
const VideoCards = ({info}) =>{
    if(!info){
        return<div>No Video Available</div>
    }
    console.log(info);
    const {snippet,statistics} =info;
    const {channelTitle,title,thumbnails} = snippet;
    return(
        
        <div className="items-center   w-[290px] p-2 mx-2 md:w-72 shadow-lg ">
           <img className="   rounded-lg  md:px-0"
        alt="thumbnail" src= {thumbnails.high.url}/>  
           <ul>
            <li className="font-bold py-2 text-[10px] md:text-sm">{title}</li>
            <li className="text-[10px] md:text-sm">{channelTitle}</li>
            <li className="text-[10px] md:text-sm">{statistics.viewCount}Views</li>
            
           </ul>
        </div>
    )
}
export default VideoCards;