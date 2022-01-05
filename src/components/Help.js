import React from 'react'
import '../style/Base.css'

const Help = (props) => {
    const { helpText, clickingX } = props
    console.log(props.helpText)
    const renderedText = helpText.map((sentence) => {
        return (
            <p className="cursor" style={{ fontFamily: 'Grand_Aventure', fontSize: '1.2vw', fontWeight: '900', color: '#000', }}>
                {sentence}
            </p>
        )
    })
    return (
        <div style={{ position: 'absolute', top: '5vh', width: '70vw', left: '15vw' }}>
            <div style={{ borderLeft: '.4vw dashed #729AC9', borderRight: '.4vw dashed #F787DF', borderTop: '.4vw dashed #87F7A7', borderBottom: '.4vw dashed #8A87F7', borderRadius: "3vw", backgroundColor: '#fff', padding: '.9vw' }}>
                {renderedText}
            </div>
            <div className="cursor-hover" style={{ position: 'absolute', top: 0, right: 0, border: '1px solid #e99799', backgroundColor: '#e2d9f3', width: '2.5vh', height: '2.3vh', display: 'inline' }}>
                <h1 className="cursor-hover" style={{ display: 'inline', paddingRight: '2px', paddingLeft: '2px', fontFamily: 'Typewriter', fontWeight: 'bolder', color: '#e99799', fontSize: '1.5vh', }} onClick={clickingX}>
                    &nbsp;X&nbsp;
                </h1>
            </div>
        </div>
    )
}

export default Help;