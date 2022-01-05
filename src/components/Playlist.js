import React from 'react'
import '../style/Base.css'

const Playlist = (props) => {
    // const [showAudio, setShowAudio] = useState(false)
    const audio_titles = ['i. Ascend', 'ii. Breath', 'iii. Clouds', 'iv. Daydreamer', 'v. Hope', 'vi. Human Sadness (granular synthesis of a Julian Casablancas demo)', 'vii. Meadows', 'viii. Moonjuice', 'ix. Rain', 'x. Someday', 'xi. What\'s so Funny Around Town']
    
    var clickingX = props.clickingX
    var showAudio = props.showAudio
    const renderedList = audio_titles.map((title) => {
        return (
            <h1 className="cursor-hover" style={{ fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#ab283f', fontSize: '1.5vh', paddingLeft: '5px', paddingTop: '-10px' }}
                onClick={() => showAudio(title)}>
                {title}
            </h1>
        )
    })
    return (
        <div className="cursor" style={{ position: 'absolute', top: '5vh', width: '30vw', left: '5vw' }}>
            <div className="cursor" style={{ width: '100%', height: '3.5vh', backgroundColor: '#e091a7', border: '1px solid #ab283f' }}>
                <div className="cursor-hover" style={{ marginLeft: '28vw', top: '.5vh', position: 'relative', border: '1px solid #ab283f', backgroundColor: '#e091a7', width: '4.5vh', height: '1.5vh', display: 'inline' }}>
                    <h1 className="cursor-hover" style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#ab283f', fontSize: '1.5vh', }}
                        onClick={clickingX}>
                        &nbsp;X&nbsp;
                    </h1>
                </div>
            </div>
            <div className="cursor" style={{ width: '100%', backgroundColor: '#e091a7', border: '1px solid #ab283f', }}>
                <h1 className="cursor" style={{ fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#ab283f', fontSize: '1.5vh', paddingLeft: '5px', paddingTop: '-10px' }}>
                    audio projects
                </h1>
            </div>
            <div style={{ width: '100%', backgroundColor: '#fff', padding: '2px' }}>
                {renderedList}
            </div>
        </div>
    )
}

export default Playlist;