import React from 'react'
import { useState } from 'react'

import { ImageMap } from '@qiuz/react-image-map'
import Iframe from 'react-iframe'

import Info from '../assets/imgs/info.png'
import Help from './Help'

import TvDisplay from '../assets/imgs/digital-off.png'

import DogHell from '../assets/imgs/digital/photoshop-pets/dogs-hell.jpg'
import HalAbstract from '../assets/imgs/digital/photoshop-pets/halle-abstract.jpg'
import HalSpace from '../assets/imgs/digital/photoshop-pets/halle-space.jpg'
import GentleGiant from '../assets/imgs/digital/photoshop-pets/gentle-giant.jpg'
import Dogzilla from '../assets/imgs/digital/photoshop-pets/dogzilla.jpg'
import Girls from '../assets/imgs/digital/photoshop-pets/the-girls.jpg'

import DadSucks from '../assets/imgs/digital/games/dad-sucks.gif'
import BabyClimbMeat from '../assets/imgs/digital/games/baby-climb-meat.gif'

import Meowmix from '../assets/imgs/digital/unity/meowmix.png'
import HomeAlone from '../assets/imgs/digital/unity/homealone.png'

import CatsInSpace from '../assets/imgs/digital/artProgramming/catsinspace.jpg'
import Mwl from '../assets/imgs/digital/artProgramming/mwl.jpg'
import Posters from '../assets/imgs/digital/artProgramming/posters.png'
import PaperTelephone from '../assets/imgs/digital/artProgramming/pt.png'

import Breath from '../assets/imgs/digital/videoWorks/breath.jpg'
import ItsAScience from '../assets/imgs/digital/videoWorks/ias.png'
import LosingMyMarbles from '../assets/imgs/digital/videoWorks/lmm.jpg'

import SpaceFuturism from '../assets/imgs/digital/space_future.png'
import GoatBox from '../assets/imgs/digital/goat-and-box.gif'

import Sparkle from '../assets/imgs/sparkle.gif'

const Tv = (props) => {
    var content = props.content
    console.log(content)
    const [channel, setChannel] = useState(content)
    const [showVideo, setShowVideo] = useState(false)
    const [videoLink, setVideoLink] = useState('')
    const [idx, setIdx] = useState(0)
    const [help, setHelp] = useState(false)
    var channels = ['unity', 'artProgramming', 'misc', 'videoWorks', 'pixelGames', 'photoshop']
    var descriptions = [
        [["The purrfect beatmaker is here! In this project, I set out to create a whimsical musical cat playground. Created in the game engine Unity, Meowmix allows users to create musical loops. Meowmix offers a wide range of percussion (cardboard boxes), sine waves (flowers), and celebrity ad libs (toys). The two cats will run to the tempo of your choosing and trigger the sounds when they walk through the items. Bonus big cats can be added to the outskirts of the scene with meows pitched to their size."], 
        ["Home Alone is a visual narrative married to a user generated soundtrack. You start your journey outside a familiar house, though it is bare when you walk in. As you venture down the halls you find rooms filled with lamps. These lamps mysteriously play notes and follow you as you walk along the house. You can tune the lamps by their color to create the backing track of your dreams. As you reach the final room, you will see a wall adorned with letters. On each letter keypress you find that you can play along to the track, along with some sick dance moves. Maybe you aren\'t home alone after all."]],
        [["I set out to create a film score generator based on the color information from film posters. I wrote a program to determine the genre of a movie based on its color constituents by taking the probability that certain genres would contain a certain color and how much of that color it would be present in a poster. Then, I created a film score generator with tonality, tempo, density, and other musical features mapped to the predicted genre. Check it out to see what I mean! What do you think? Did the film score generator get it right?"], 
        ["This project deals with sonifying an image. The image, My Wife's Lovers by Carl Kahler is brought to life in a yowling piece. Mousing over the pixel color plays a note that is determined by the (r, g, b) where the R component corresponds to vibrato, the G component corresponds to Frequency, and the B component corresponds to Dynamic. Underneath this is a sonification of each pixel in the image as a triad with the R, G and B values each contributing a frequency"],
        ["Cats in space! Piggy backing on the previous project, I created a choir of kitties trying to reach their home painting. They travel through space to find their home painting while stumbling through other works of art along the way. The voices of the cats are created by granular synthesis, where you repeat a 'grain' of an audio file (in this case a cat meow), i.e. a really really small segment of the file. The cats frequencies are controlled by the user and they move up and down relative to their frequency. Enjoy the four part harmony and walk through space!"], 
        ["Remember paper cup telephones? This audio visualizer and piece represents what I imagine two chatty cups would get up to. The line in the middle is the waveform of the audio played, using a fast fourier transform, tapered at the ends for style. The 'water' echoing out of the cups represents the spectrogram of the waveform, with the low frequencies on the left and the high frequencies on the right."]],
        [["Made in blender and inspired by space futurism, I created this space shower."], 
        ["Ah. Goat and the box. An inspiring piece. I made this playing around with Three.js and while it isn't much I thought it looked quite editorial so I kept it on the portfolio."]],
        [["I created this piece with the idea of meditation in mind. However, this piece isn't intended to calm the audience. Seemingly calm sounds and visuals mixed together create an unsettling and foreboding atmosphere."], 
        ["This project explores auditory and visual mismatch in a whimsical manner. The clincal and sterile lab images pair weirdly with the sounds of home. Suddenly wires are windchimes and it maybe makes sense?"], 
        ["Oh No! I'm Losing my Marbles! This project was inspired by the recurring fear I have of losing memories. Not losing my memory entirely, but individual memories. What does it mean to lose a valuable memory? Here these special memories are encapsulated in marbles and immortalized for however long Vimeo keeps this up. Listen as my friends recall their most precious memories. Soundtrack composed and played by me."], 
        ], 
        [["Dad Sucks! In this game, you play as Lizzie, the daughter of Satan himself. As expected, your dad is not the nicest and he has put you in charge of fetching all the lost souls that spilled out of the gates of hell. In this game, you collect the lost souls and dodge bullets sent by Heaven's angels all while Dad sasses you up top. Art and soundtrack by me!"],
        ["Baby Climb Meat Mountain Not Too Cold is a game created for the game jam on itch.io by the same title. In this game, you are a baby and are climbing the mouintain of play blocks to reach the coveted piece of meat at the top. Be careful though, the road ahead is dangerous and riddled with various adversaries. The temperature is controlled by the space bar. Hold it too long and the temperature rises to deadly degrees but let go to long and your baby will certainly end up with frostbite. When the temperature is not perfectly room temperature, creatures and weather will appear at different ranges of temperature. Make sure to shoot down the enemies because Baby does NOT like crowds! Reach the top and you win!"]], 
        [["Dogs in Hell (art from Hieronymus Bosch, dogs from my mom)"], ["Halle in the Moutains (my cat)"], ["Halle in Space"], ["The Gentle Giant (named Bear)"], ["Dogzilla (named Kitty)"], ["Halle and the Girls"]]
    ]
    var [channelIdx, setChannelIdx] = useState(channels.indexOf(content))
    var selectedArrays = []
    var videoLinks = []
    const checkChannels = () => {
        if (channel == "photoshop") {
            selectedArrays = [DogHell, HalAbstract, HalSpace, GentleGiant, Dogzilla, Girls]
        }
        if (channel == "pixelGames") {
            selectedArrays = [DadSucks, BabyClimbMeat]
        }
        if (channel == "unity") {
            selectedArrays = [Meowmix, HomeAlone]
            videoLinks = ["https://www.youtube.com/embed/jIyx12Z7pFo", "https://www.youtube.com/embed/F_7jKsach8s"]
        }
        if (channel == "artProgramming") {
            selectedArrays = [Posters, Mwl, CatsInSpace, PaperTelephone]
            videoLinks = ["https://player.vimeo.com/video/538114525?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479", "https://www.youtube.com/embed/WmIpCLp7h5A", "https://player.vimeo.com/video/325366272", "https://www.youtube.com/embed/zn95DKFuJKQ"]
        }
        if (channel == "videoWorks") {
            selectedArrays = [Breath, ItsAScience, LosingMyMarbles]
            videoLinks = ["https://player.vimeo.com/video/318912779", "https://player.vimeo.com/video/322709385", 'https://www.youtube.com/embed/2vJH8e_KniM']
        }
        if (channel == "misc") {
            selectedArrays = [SpaceFuturism, GoatBox]
        }
    }

    checkChannels()

    const mapArea = [
        {
            "width": "40.14117647058824%",
            "height": "46.150110375275936%",
            "left": "20.530514705882387%",
            "top": "20.737306843267106%",
            "style": { "borderRadius": "4vh" },
            "className": "image-map__map usage-map cursor_map_span-0 cursor",
            render: () => {
                return (
                    <div className="cursor" style={{ display: 'flex', width: '40vw', justifyContent: 'center', height: '45vh', borderRadius: '4vh', overflow: 'hidden' }}>
                        <div className={channel === 'photoshop' || channel === 'misc' ? 'cursor' : 'cursor-hover'}
                            style={{ height: '100%', borderRadius: '4vh', width: '100%', position: 'absolute', display: 'flex', justifyContent: 'center', overflow: 'hidden', backgroundColor: 'cadetblue' }}>
                            <img className={channel === 'photoshop' || channel === 'misc' ? 'cursor' : 'cursor-hover'} style={{ height: '45vh', borderRadius: '4vh' }} src={selectedArrays[idx]} onClick={() => {
                                if (channel == "pixelGames") {
                                    setShowVideo(false)
                                    if (idx == 0) {
                                        window.open("https://github.com/ssilverst/dad-sucks", "_blank");
                                    }
                                    if (idx == 1) {
                                        window.open("https://github.com/ssilverst/baby-climb-meat", "_blank")
                                    }
                                }
                                if (channel == "videoWorks" | channel == "unity" | channel == "artProgramming") {
                                    setShowVideo(true)
                                    setVideoLink(videoLinks[idx])
                                }
                            }} />
                            {showVideo &&
                                <div
                                    style={{ height: '100%', borderRadius: '4vh', width: '100%', position: 'absolute', display: 'flex', overflow: 'hidden', backgroundColor: 'cadetblue' }}>
                                    <Iframe url={videoLink}
                                        margin="-10px"
                                        width='100%' />
                                </div>
                            }
                        </div>
                    </div>
                )
            }
        },
        {
            "width": "6%",
            "height": "10.596026490066226%",
            "left": "72%",
            "top": "19.6%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-knob",
        },
        { 
            "width": "5.7%", 
            "height": "10.223048327137546%", 
            "left": "72.4%", 
            "top": "35.3%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover hover-knob"
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"77.01937972667606%",
            "top":"20.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '8vh' }} />
                )
            }
        },
        {
            "width":"2.1395348837209305%",
            "height":"3.5862068965517238%",
            "left":"70.01937972667606%",
            "top":"39.482758620689655%",
            render: () => {
                return (
                    <img className="cursor" src={Sparkle} style={{ width: '8vh' }} />
                )
            }
        },
    ]
    const onMapClick = (area, index) => {
        if (index == 1) {
            setIdx(prevIdx => (prevIdx + 1) % (selectedArrays.length))
            setShowVideo(false)
        }
        if (index == 2) {
            var curr_idx = (channelIdx + 1) % channels.length
            setChannel(channels[curr_idx])
            setChannelIdx(curr_idx)
            setIdx(0)
            checkChannels()
        }
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <ImageMap
                style={{ margin: "-10px", height: '100vh', width: '100%' }}
                className="usage-map cursor"
                src={TvDisplay}
                map={mapArea}
                onMapClick={onMapClick}>
            </ImageMap>
            <h1 className="cursor" style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '5vh', position: 'absolute', top: '2vh', left: '42%' }}>{channel}</h1>
            <img className="cursor-hover" src={Info} style={{ position: 'absolute', top: 10, right: 20, width: '10vw' }} onClick={() => setHelp(prevHelp => !prevHelp)} />
            {help && <Help helpText={descriptions[channelIdx][idx]} clickingX={() => setHelp(false)}/>}
        </div>
    )
}
export default Tv;