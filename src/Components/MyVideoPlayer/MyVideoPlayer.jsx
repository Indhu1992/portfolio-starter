import React from "react";
import ReactPlayer from "react-player";
import "./MyVideoPlayer.css";

const MyVideoPlayer = () => {
  return (
    <div className="outer">
      <div className="video">
        <div className="v-content">
          <div className="portfolio">
            {/* heading */}
            <span>Video Component</span>
            <span>YouTube</span>
            <ReactPlayer
              light={true}
              controls={true}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVideoPlayer;
