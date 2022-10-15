import contentArray, { Content, getContentObject } from 'Content/content'
import ContentPage from 'Content/ContentPage'
import React from 'react'
import { useParams } from 'react-router-dom'

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
    category: string
}

type Props = {
    contentObject?: {
        [id: number]: Content
    }
    pageLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

const ArticlePage = ({
    contentObject = getContentObject(contentArray),
    pageLikeState,
    toggleLikeState,
}: Props) => {
    const { id } = useParams()
    const currentId = id

    return (
        <>
            {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId))
                .map(({ title, image, text, id, category }: ContentProps) => (
                    <ContentPage
                        key={id}
                        title={title}
                        image={image}
                        text={text}
                        id={id}
                        category={category}
                        isLiked={pageLikeState[id]}
                        toggleLikeState={toggleLikeState}
                    />
                ))}
        </>
    )
}

export default ArticlePage
