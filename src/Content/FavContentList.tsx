import React from 'react'
import ContentListItem from './ContentListItem'
import contentArray, { Content, getContentObject } from './content'
import './FavContentList.scss'

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

    сontentObject?: {
        [id: number]: Content
    }
}

const FavContentList = ({
    pageLikeState,
    cat,
    toggleLikeState,
    сontentObject = getContentObject(contentArray),
}: ContentListProps) => {
    return (
        <>
            <div className="favcontentlist-container">
                {Object.keys(pageLikeState).map((contentId) => (
                    <ContentListItem
                        key={сontentObject[parseInt(contentId)].id}
                        title={сontentObject[parseInt(contentId)].title}
                        image={сontentObject[parseInt(contentId)].image}
                        text={сontentObject[parseInt(contentId)].text}
                        id={сontentObject[parseInt(contentId)].id}
                        category={сontentObject[parseInt(contentId)].category}
                        isLiked={pageLikeState[parseInt(contentId)]}
                        toggleLikeState={toggleLikeState}
                    />
                ))}
            </div>
        </>
    )
}

export default FavContentList
