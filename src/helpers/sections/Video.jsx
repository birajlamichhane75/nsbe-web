import React from 'react';
import CommonSection1 from '../ui/CommonSection1';

const Video = () => {
    return (
        <div className=" video-container md:h-[100vh] h-[60vh] ">
            {/* Background Video */}
            <video className="background-video" autoPlay loop muted>
                <source src='/videos/video1.mp4' type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <CommonSection1>
                <div className="content ">
                </div>
            </CommonSection1>
        </div>
    );
}

export default Video;
