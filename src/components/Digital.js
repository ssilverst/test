import React from 'react'
import { useState } from 'react'
import { ImageMap } from '@qiuz/react-image-map'

import Help from '../components/Help'
import Tv from './Tv'

import DigitalPhoto from '../assets/imgs/digital.png'
import Back from '../assets/imgs/back-arrow.png'
import Info from '../assets/imgs/info.png'
import '../style/Digital.css'
import '../style/Base.css'

import PhotoshopIcon from '../assets/imgs/digital/photoshop-icon.png'
import PixelIcon from '../assets/imgs/digital/pixel-icon.png'
import MiscIcon from '../assets/imgs/digital/misc-icon.png'
import VideoWork from '../assets/imgs/digital/video-works-icon.png'
import Unity from '../assets/imgs/digital/unity-icon.png'
import ArtProgramming from '../assets/imgs/digital/art-programming-icon.png'

import Mushroom1 from '../assets/imgs/digital/creatures/mushies.png'
import Mushroom2 from '../assets/imgs/digital/creatures/shroomies.png'

const Digital = () => {
    const [help, setHelp] = useState(false)
    const [pixelGames, setPixelGames] = useState(false)
    const [misc, setMisc] = useState(false)
    const [photoshop, setPhotoshop] = useState(false)
    const [unity, setUnity] = useState(false)
    const [artProgramming, setArtProgramming] = useState(false)
    const [videoworks, setVideoworks] = useState(false)
    const [showTv, setShowTv] = useState(false)
    const [content, setContent] = useState('unity')
    var helpText = ["Welcome to the digital garden!", "Many of these works I\'ve created while in college and others were done to fill the void of time that came with quarantine. Amongst these works you see here are my love for pixel art games, photoshopping my pets into sceneries, and playing around with 2d and 3d image softwares.", "Generally, video projects that I made for my computer music degree are held by the raccoons and the squirrels hold all the photos/miscellaneous other things. In other words, raccoons mean serious business."]
    const mapArea = [
        {
            "width": "24.330900243309003%", "height": "22.525597269624573%", "left": "38.416210462287104%",
            "top": "31.74061433447099%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover"
        },
        {
            "width": "4.622871046228711%", "height": "16.723549488054605%", "left": "61.47703771289538%", "top": "74.4027303754266%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <img className="cursor-hover icon icon-change" src={Mushroom2} style={{ width: '8vh' }} />
                )
            }
        },
        {
            "width": "6.569343065693431%", "height": "16.040955631399317%", "left": "29.413777372262807%", "top": "76.45051194539249%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <img className="cursor-hover icon icon-change" src={Mushroom2} style={{ width: '8vh', transform: 'scaleX(-1)' }} />
                )
            }
        },
        {
            "width":"11.323529411764707%",
            "height":"16.70103092783505%",
            "left":"82.01286764705884%",
            "top":"80.41237113402062%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover", 
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon icon-grow" src={Mushroom1} style={{ position: 'absolute', width: '20vh' }} />
                    </div>
                )
            }
        },
        {
            "width": "8.27250608272506%", "height": "7.167235494880546%", "left": "2.163169099756691%", "top": "1.706484641638226%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover", 
            render: () => {
                return (
                    <img className="cursor-hover" src={Back} style={{ position: 'absolute',  width: '5vw', transform: 'rotate(90deg)' }} onClick={() => window.location.href = '/'} />
                )
            }
    
        },
        {
            "width": "8.75912408759124%", 
            "height": "7.508532423208192%", 
            "left": "87.3213199513382%", 
            "top": "1.706484641638226%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <img className="cursor-hover" src={Info} style={{ position: 'absolute', top: 10, width: '10vw' }} onClick={() => setHelp(prevHelp => !prevHelp)} />
                )
    
            }
        },
        {
            "width": "6.082725060827251%", "height": "16.723549488054605%", "left": "88.05124695863748%", "top": "31.74061433447099%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover", 
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon squirrel" src={PixelIcon} style={{ width: '15vh' }} 
                            onClick={() => {
                                setShowTv(true)
                                setContent('pixelGames') }} 
                            onMouseOver={() => { setPixelGames(true) }} 
                            onMouseOut={() => { setPixelGames(false) }} />
                        {pixelGames ? <p style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '4vh', textShadow: '0 0 50px #e69138'  }}>pixel games</p> : null}
                    </div>
                    
                )
            }
        },
        {
            "width": "6.81265206812652%", "height": "17.4061433447099%", "left": "4.352950121654501%", "top": "17.747440273037544%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon squirrel" src={PhotoshopIcon} style={{ width: '15vh' }} 
                            onClick={() => {
                                setShowTv(true)
                                setContent('photoshop') }} 
                            onMouseOver={() => { setPhotoshop(true) }} 
                            onMouseOut={() => { setPhotoshop(false) }} />
                        {photoshop ? <p style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '4vh', textShadow: '0 0 50px #e69138'  }}>photoshop</p> : null}
                    </div>
                    
                )
            }
        },
        {
            "width": "6.082725060827251%", "height": "17.064846416382252%", "left": "0.301855231143552%", "top": "80.38566552901023%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon squirrel" src={MiscIcon} style={{ width: '15vh' }} 
                        onClick={() => {
                                setShowTv(true)
                                setContent('misc') }} 
                        onMouseOver={() => { setMisc(true) }} 
                        onMouseOut={() => { setMisc(false) }} />
                        {misc ? <p style={{ fontFamily: 'Grand_Aventure', marginTop: "-20vh", color: '#ffc40c', fontSize: '4vh', textShadow: '0 0 50px #e69138' }}>miscellaneous</p> : null}
                    </div>
                    
                )
            }
        },
        {
            "width":"12.647058823529411%","height":"23.505154639175256%",
            "left":"44.21875%","top":"69.48453608247422%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon icon-grow" src={VideoWork} style={{ width: '15vh' }} 
                            onClick={() => {
                                setShowTv(true)
                                setContent('videoWorks') }} 
                            onMouseOver={() => { setVideoworks(true) }} 
                            onMouseOut={() => { setVideoworks(false) }} />
                        {videoworks ? <p style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '4vh', textShadow: '0 0 50px #e69138' }}>video works</p> : null}
                    </div>
                )
            }
        },
        {
            "width":"9.852941176470589%","height":"21.649484536082475%","left":"23.63051470588237%","top":"42.06185567010309%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon icon-grow" src={Unity} style={{ width: '15vh' }} 
                        onClick={() => {
                                setShowTv(true)
                                setContent('unity') }} 
                        onMouseOver={() => { setUnity(true) }} 
                        onMouseOut={() => { setUnity(false) }} />
                        {unity ? <p style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '4vh', textShadow: '0 0 50px #e69138' }}>unity</p> : null}
                    </div>
                )
            }
        },
        {
            "width":"11.323529411764707%","height":"26.391752577319593%","left":"68.63051470588235%","top":"38.55670103092784%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <div>
                        <img className="cursor-hover icon icon-grow" src={ArtProgramming} style={{ width: '23vh' }} 
                        onClick={() => {
                                setShowTv(true)
                                setContent('artProgramming') }} 
                        onMouseOver={() => { setArtProgramming(true) }} 
                        onMouseOut={() => { setArtProgramming(false) }} />
                        {artProgramming ? <p style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '4vh', textShadow: '0 0 50px #e69138' }}>art n programming</p> : null}
                    </div>
                )
            }
        },
    ]

    const onMapClick = (area, index) => {
        if (index == 0){
            setContent('unity')
            setShowTv(true)
        }
    }
    return (
        <div>
            { showTv ? <Tv content={content} /> : <ImageMap
                style={{ margin: "-10px", height: '100vh', width: '100%' }}
                className="usage-map cursor"
                src={DigitalPhoto}
                map={mapArea}
                onMapClick={onMapClick}>
            </ImageMap> }
            { help ? <Help helpText={helpText} clickingX={() => setHelp(false)}/> : null }
            { showTv && <img className="cursor-hover" src={Back} style={{ position: 'absolute', top: 5, left: 20, width: '5vw', transform: 'rotate(90deg)' }} onClick={() => setShowTv(false)} />}
        </div>

    )
}
export default Digital;