import BlockType1 from 'components/BlockType1/BlockType1'
import BlockType2 from 'components/BlockType2/BlockType2'
import contentArray from 'Content/content'
import ContentList from 'Content/ContentList'
import React from 'react'

type Props = {
    pageLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
}

const Delivery = ({ pageLikeState, toggleLikeState }: Props) => {
    const cat = 'delivery'
    const currentId1 = 305
    const currentId2 = 306
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

            <ContentList
                cat={cat}
                pageLikeState={pageLikeState}
                toggleLikeState={toggleLikeState}
            />
        </>
    )
}

export default Delivery
