import React from 'react'
import { useState } from 'react'

import '../style/Base.css'
import { ImageMap } from '@qiuz/react-image-map'
import Bookcase from '../assets/imgs/bookcase.png'
const Bookshelf = (props) => {
    var clickingX = props.clickingX
    var showYear = props.showYear
    const [show2021, setShow2021] = useState(false)
    const [show2020, setShow2020] = useState(false)
    const mapArea = [
        {
            "width":"3.4739454094292808%",
            "height":"4.149377593360995%",
            "left":"97.08762406947892%",
            "top":"20.4522821576763485%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    <div className="cursor-hover" style={{ position: 'relative', border: '1px solid #455a25', backgroundColor: '#c5dca1', width: '4.5vh', height: '1.5vh', display: 'inline' }}>
                        <h1 className="cursor-hover" style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#455a25', fontSize: '1.5vh', }} onClick={clickingX}>
                            &nbsp;X&nbsp;
                        </h1>
                    </div>
                )
            }
        },
        {
            "width": "50.25%",
            "height": "30.67790262172284%",
            "left": "10%",
            "top": "50.490636704119854%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <div style={{ width: '100%', height: '100%'}} onMouseOver={() => setShow2021(true)} onMouseOut={() => setShow2021(false)} onClick={() => showYear(2021)}>
                    </div>
                )
            } 
        },
        {
            "width":"3.4739454094292808%",
            "height":"4.149377593360995%",
            "left":"40%",
            "top":"55%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    show2021 ? <h1 style={{fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize:"1.5vh"}}>2021!</h1> : null
                )
            }
        },
        {
            "width": "20.25%",
            "height": "40.67790262172284%",
            "left": "35%",
            "top": "5.3%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <div style={{ width: '100%', height: '100%'}} onMouseOver={() => setShow2020(true)} onMouseOut={() => setShow2020(false)} 
                        onClick={() => {
                            showYear(2020)
                        }}
                        >
                    </div>
                )
            } 
        },
        {
            "width":"3.4739454094292808%",
            "height":"4.149377593360995%",
            "left":"28%",
            "top":"9%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return(
                    show2020 ? <h1 style={{fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize:"1.5vh"}}>2020!</h1> : null
                )
            }
        },
        {
            "width": "50%", 
            "height": "5%", 
            "top": "15%", 
            "left": "10%",
            "className": "image-map__map usage-map cursor_map_span-0 cursor-hover",
            render: () => {
                return (
                    <h1 style={{ fontFamily: 'Grand_Aventure', color: '#ffc40c', fontSize: '2vh' }}>Book List</h1>
                )
            }
        }
    ]
    return (
        <div style={{ position: 'absolute', top: '0vh', right: '10vw'}}>
            <ImageMap
                style={{ margin: "-10px", height: '47vh', width: '20vw'}}
                className="usage-map cursor"
                src={Bookcase}
                map={mapArea}
                onMapClick={(area, index) => {
                    console.log(index)
                }}>
            </ImageMap>
        </div>
    )
}
export default Bookshelf;