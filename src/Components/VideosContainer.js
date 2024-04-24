import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "./utils/constant";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideosContainer = () => {
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_API);
            const json = await data.json();
            setVideos(json.items);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    return (
        <div className="flex flex-wrap ml-4 md:mx-2">
            {Array.isArray(videos) && videos.map((video) => (
                <Link to={"/watch?v=" + video.id} key={video.id}>
                    <VideoCards info={video} />
                </Link>
            ))}
        </div>
    );
}

export default VideosContainer;
