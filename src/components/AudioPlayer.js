import React from 'react'
import { useState } from 'react';
import '../style/Base.css'

const AudioPlayer = (props) => {
    const [playing, setPlaying] = useState(false)
    var file = props.file
    return (
        <div className="cursor" 
            style={{ position: 'absolute', top: '6vh', width: '20vw', left: '12vw', height: '2vh', backgroundColor: '#e091a7', }}
            >
            {!playing && <h1 className="cursor-hover"
                style={{ display: 'inline', paddingTop: '2px', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#ab283f', fontSize: '1.5vh', }}
                onClick={() => {
                    document.getElementById('audio').play()
                    setPlaying(true)
                }}>
                play {file}?
            </h1>}
            {playing && <h1 className="cursor-hover"
                style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#ab283f', fontSize: '1.5vh', }}
                onClick={() => {
                    document.getElementById('audio').pause()
                    setPlaying(false)
                }}>
                ...playing {file}... &nbsp; &nbsp; &nbsp; pause?
            </h1>}

                <audio id="audio" src={`/audio/${file}`}>
                    Your browser does not support the <code>audio</code> element.
                </audio>
        </div>
    )
}

export default AudioPlayer;
