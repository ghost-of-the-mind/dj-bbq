import React from "react";

import videoPoster from '../../assets/video/header/header-intro-thumbnail.png';
import videoMP4 from '../../assets/video/header/header-intro.mp4';
import videoWEBM from '../../assets/video/header/header-intro.webm';

const VideoSection = () => {
    return (

        <section className='intro-video-section'>
            <video className='responsive-media' autoPlay loop muted playsInline poster={videoPoster}>
                <source src={videoWEBM} type='video/webm' />
                <source src={videoMP4} type='video/mp4' />
                    <p>Your browser doesn't support HTML5 video. Here is a <a href='%PUBLIC_URL%/assets/video/header/header-intro.mp4'>link to the video</a> instead.</p>
            </video>          
        </section>
        
    )
};

export default VideoSection;