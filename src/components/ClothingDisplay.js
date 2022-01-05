import React from 'react'
import { useState } from 'react'

import '../style/Base.css'

const ClothingDisplay = (props) => {
    const clothing_files = ['cave-story', 'living-room-1', 'devil', 'halle', 'living-room', 'kuchi-kopi', 'shirt', ]
    const {clothing} = props
    const [clothIdx, setClothIdx] = useState(clothing)
    return (
        <div className="cursor" style={{ borderRadius: '2vw', backgroundImage:`url('/sewing/pattern.png')`, width: '15vw', height: '15vw', position: 'relative' }}>
            <img className="cursor-hover" src={`sewing/${clothing_files[clothIdx]}.png`} style={{ borderRadius: '2vw', width: '90%', height: '90%', position: 'absolute', left: '5%', top: '5%' }} 
            onClick={() => {
                setClothIdx((clothIdx+1)%clothing_files.length)
            }}

            />
        </div>
    )
}
export default ClothingDisplay;