import BlockType1 from 'components/BlockType1/BlockType1'
import contentArray from 'Content/content'
import FavContentList from 'Content/FavContentList'
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

const Fav = ({ pageLikeState, toggleLikeState }: Props) => {
    const cat = 'delivery'
    const currentId1 = 311
    return (
        <>
            {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId1))
                .map(({ title, image, text }: ContentProps) => (
                    <BlockType1 title={title} image={image} text={text} />
                ))}
            <FavContentList
                cat={cat}
                pageLikeState={pageLikeState}
                toggleLikeState={toggleLikeState}
            />
        </>
    )
}

export default Fav
