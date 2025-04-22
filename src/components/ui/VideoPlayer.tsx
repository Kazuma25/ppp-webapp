'use client';

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=-FEondJjBF8" // ou un lien .mp4
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0 z-0"
        config={{
            file: {
              attributes: {
                crossOrigin: 'anonymous',
                controlsList: 'nodownload',
              }
            }
        }}
      />
    </div>
  );
};

export default VideoPlayer;
