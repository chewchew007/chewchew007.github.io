import React, { useState } from 'react';
function Music() {
    const [playing, setPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const tracks = [
        '/music/HBD song.mp3'
    ];
    return (
        <>
            <div className="flex justify-center items-center w-full">
            </div>
            <div className="w-80 mx-auto p-4 backdrop-blur-xl bg-white/30 shadow-lg rounded-lg text-center my-5">
               
                <audio
                    src={tracks[trackIndex]}
                    controls
                    autoPlay={playing}
                    className="w-full"
                />
            </div>
        </>
    );
}

export default Music;
