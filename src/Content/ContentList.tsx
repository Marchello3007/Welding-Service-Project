import React from 'react'
import ContentListItem from './ContentListItem'
import contentArray from './content'
import './ContentList.scss'

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
    category: string
}

type ContentListProps = {
    pageLikeState: {
        [id: number]: boolean
    }
    cat: string
    toggleLikeState: (id: number) => void
}

const ContentList = ({
    pageLikeState,
    cat,
    toggleLikeState,
}: ContentListProps) => {
    return (
        <>
            <div className="contentlist-container">
                {contentArray
                    .filter(({ category }: ContentProps) => category === cat)
                    .map(
                        ({
                            title,
                            image,
                            text,
                            id,
                            category,
                        }: ContentProps) => (
                            <ContentListItem
                                key={id}
                                title={title}
                                image={image}
                                text={text}
                                id={id}
                                category={category}
                                isLiked={pageLikeState[id]}
                                toggleLikeState={toggleLikeState}
                            />
                        )
                    )}
            </div>
        </>
    )
}

export default ContentList
