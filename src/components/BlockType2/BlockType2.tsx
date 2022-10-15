import React from 'react'
import './BlockType2.scss'

type Props = {
    image: string
    text: string
}

const BlockType2 = ({ image, text }: Props) => {
    return (
        <div className="block-type-2-container">
            <img className="block-type-2-container-one" src={image} alt="" />
            <div className="block-type-2-container-two">{text}</div>
        </div>
    )
}

export default BlockType2
