import React from 'react'
import { useState } from 'react'
import { ImageMap } from '@qiuz/react-image-map'

import Playlist from '../components/Playlist'
import AudioPlayer from './AudioPlayer'
import Sewing from './Sewing'
import ClothingDisplay from './ClothingDisplay'
import Bookshelf from './Bookshelf'
import Booklist from './Booklist'

import Room from '../assets/imgs/room.png'
import RoomDark from '../assets/imgs/room-dark.png'

import Sparkle from '../assets/imgs/sparkle.gif'

import '../style/Base.css'
import '../style/Home.css'


const Home = () => {
    const [lightMode, setLightMode] = useState(false)
    const [showPlaylist, setShowPlaylist] = useState(false)
    const [playAudio, setPlayAudio] = useState(false)
    const [audioFile, setAudioFile] = useState('')
    const [showSewing, setShowSewing] = useState(false)
    const [displayClothing, setDisplayClothing] = useState(false)
    const [clothing, setClothing] = useState('')
    const [showBookshelf, setShowBookshelf] = useState(false)
    const [displayList, setDisplayList] = useState(false)
    const [year, setYear] = useState('')
    
    const audio_files = ['ascend.mp3', 'breath.mp3', 'clouds.mp3', 'daydreamer.mp3', 'hope.mp3', 'human-sadness.mp3', 'meadows.mp3', 'moonjuice.mp3', 'rain.mp3', 'someday.mp3', 'wsfat.mp3']
    const audio_titles = ['i. Ascend', 'ii. Breath', 'iii. Clouds', 'iv. Daydreamer', 'v. Hope', 'vi. Human Sadness (granular synthesis of a Julian Casablancas demo)', 'vii. Meadows', 'viii. Moonjuice', 'ix. Rain', 'x. Someday', 'xi. What\'s so Funny Around Town']
    
    const mapArea = [
        {
            "width": "1.729528535980149%",
            "height": "1.779411764705882%",
            "left": "55.88166873449132%",
            "top": "21%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '12vh' }} />
                )
            }
        },
        {
            "width":"1.1395348837209305%",
            "height":"1.8620689655172415%",
            "left":"67.39147274993186%",
            "top":"22.89655172413793%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '9vh' }} />
                )
            }
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"30.01937972667606%",
            "top":"23.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '9.5vh' }} />
                )
            }
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"40.01937972667606%",
            "top":"35.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '8vh' }} />
                )
            }
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"53.01937972667606%",
            "top":"52.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '8vh' }} />
                )
            }
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"10.01937972667606%",
            "top":"30.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '5vh' }} />
                )
            }
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"12.01937972667606%",
            "top":"26.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '5vh' }} />
                )
            }
        },
        // TV //
        {
            "width":"15.75682382133995%",
            "height":"18.602941176470587%",
            "left":"42.72285980148883%",
            "top":"24.65441176470588%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
        },
        // lamp //
        {
            "width": "3.8929440389294405%",
            "height": "12.996389891696749%",
            "left": "10.67898418491484%",
            "top": "22.3826714801444%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
    
        },
        // books //
        {
            "width": "14.355231143552311%", 
            "height": "12.274368231046932%", 
            "left": "54.23129562043796%", 
            "top": "52.34657039711191%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
    
        },
        // sewing //
        {
            "width": "10%", 
            "height": "7.581227436823104%", 
            "left": "32.57679440389295%", 
            "top": "37%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
        },
        // record right //
        {
            "width": "10%",
            "height": "17.830882352941178%",
            "left": "59.3556141439206%",
            "top": "26%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element"
        },
        {
            "width": "11.166253101736972%",
            "height": "10.477941176470589%",
            "left": "31.3%",
            "top": "26%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-element",
        },
        {
            "width":"14.516129032258066%",
            "height":"20.772058823529413%",
            "left":"9.72782258064516%",
            "top":"54.96323529411765%",
            "className": "hover-element image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    showSewing && displayClothing && <ClothingDisplay clothing={clothing}/>
                )
            }
        }, 
        {
            "width":"100%",
            "height":"1%",
            "left":"1.72782258064516%",
            "top":"95.96323529411765%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    <h1 className="cursor" style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '2.2vh'}}>photos courtesy of unsplash, photoshopped/edited by me!</h1>
                )
            }
        }
    ];
    const onMapClick = (area, index) => {
        if (index == 7) {
            window.location.href = '/digital-garden'
        }
        if (index == 8) {
            setLightMode(prevLightMode => !prevLightMode)
        }
        if (index == 9){
            setShowBookshelf(true)
        }
        if (index == 10) {
            setShowSewing(true)
        }
        if (index == 12 | index == 11) {
            setShowPlaylist(true)
        }
        console.log(`pressing ${index}`)
    }
    const showAudio = (title) => {
        setPlayAudio(true)
        setAudioFile(audio_files[audio_titles.indexOf(title)])
    }
    const showClothing = (clothing) => {
        setDisplayClothing(true)
        setClothing(clothing)
    }
    const showList = (year) => {
        setDisplayList(true)
        setYear(year)
    }
    return (
        <div>
            <ImageMap
                style={{ margin: "-10px", height: '100vh', width: '100%' }}
                className="usage-map cursor"
                src={lightMode ? RoomDark : Room}
                map={mapArea}
                onMapClick={onMapClick}>
            </ImageMap>
            <h1 className="cursor" style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '2.5vw', position: 'absolute', top: '9.8%', left: '37.75vw' }}>welcome to my digital home</h1>
            {showPlaylist && <Playlist clickingX={() => {
                setShowPlaylist(false)
                setPlayAudio(false)
            }} showAudio={(title) => showAudio(title)} />}
            {showPlaylist && playAudio && <AudioPlayer file={audioFile} />}

            {showSewing && <Sewing clickingX={() => {
                setShowSewing(false)
                setDisplayClothing(false)
            }} showClothing={(clothing) => showClothing(clothing)}/> } 
            {showBookshelf && <Bookshelf clickingX={() => {
                setShowBookshelf(false)
                setDisplayList(false)
            }} showYear={(year) => showList(year)}/>}
            {showBookshelf && displayList && <Booklist year={year} />}
        </div>
    )
}

export default Home;