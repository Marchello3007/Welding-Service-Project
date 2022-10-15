import React from 'react'
import './BlockType3.scss'

type Props = {
    image: string
    text: string
}

const BlockType3 = ({ image, text }: Props) => {
    return (
        <div className="block-type-3-container">
            <img className="block-type-3-container-one" src={image} alt="" />
            <div className="block-type-3-container-two">{text}</div>
        </div>
    )
}

export default BlockType3
