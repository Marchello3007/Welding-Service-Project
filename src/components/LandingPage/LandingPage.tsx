import React from 'react'
import { useParams } from 'react-router-dom'
import contentArray, { Content, getContentObject } from 'Content/content'
import PageTempl from 'components/PageTempl/PageTempl'

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
    category: string
    ttl?: string
}

type Props = {}

const LandingPage = (props: Props) => {
    const { id } = useParams()
    const currentId = id
    return (
        <>
            {/* {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId))
                .map(({ title, image, text, id, category, ttl}: ContentProps) => (
                    <PageTempl
                        key={id}
                        title={title}
                        image={image}
                        text={text}
                        // ttl={ttl}
                        // id={id}
                        // category={category}
                        // isLiked={pageLikeState[id]}
                        // toggleLikeState={toggleLikeState}
                    />
                ))} */}
        </>
    )
}

export default LandingPage
