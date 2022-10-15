import BlockType1 from 'components/BlockType1/BlockType1'
import BlockType2 from 'components/BlockType2/BlockType2'
import BlockType3 from 'components/BlockType3/BlockType3'

import React from 'react'
import './Home.scss'
import contentArray from 'Content/content'
import PageTempl from 'components/PageTempl/PageTempl'

type Props = {}

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
}

const Home = (props: Props) => {
    const currentId1 = 301
    const currentId2 = 302
    const currentId3 = 303
    const currentId4 = 304

    return (
        <>
            {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId1))
                .map(({ title, image, text }: ContentProps) => (
                    <BlockType1 title={title} image={image} text={text} />
                ))}
            {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId2))
                .map(({ image, text }: ContentProps) => (
                    <BlockType2 image={image} text={text} />
                ))}
            {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId3))
                .map(({ image, text }: ContentProps) => (
                    <BlockType3 image={image} text={text} />
                ))}

            {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId4))
                .map(({ image, text }: ContentProps) => (
                    <BlockType2 image={image} text={text} />
                ))}
        </>
    )
}

export default Home
