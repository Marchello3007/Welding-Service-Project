import React from 'react'
import './BlockType1.scss'

type Props = {
    title: string
    text: string
    image: string
}

const BlockType1 = ({ title, image, text }: Props) => {
    return (
        <div className="block-type-1-container">
            <div className="block-type-1-container-title">{title}</div>
            <img className="block-type-1-container-one" src={image} alt="" />
            <div className="block-type-1-container-two">{text}</div>
        </div>
    )
}

export default BlockType1
