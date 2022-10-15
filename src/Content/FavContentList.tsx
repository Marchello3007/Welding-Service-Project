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

// старый, работавший вариант, до переписывания

// import React from 'react'
// import ContentListItem from './ContentListItem'
// import contentArray from './content'
// import './FavContentList.scss'

// type ContentProps = {
//     title: string
//     image: string
//     text: string
//     id: number
//     category: string
// }

// type ContentListProps = {
//     pageLikeState: {
//         [id: number]: boolean
//     }
//     cat: string
//     toggleLikeState: (id: number) => void
// }

// const FavContentList = ({
//     pageLikeState,
//     cat,
//     toggleLikeState,
// }: ContentListProps) => {
//     return (
//         <>
//             <div className="favcontentlist-container">
//                 {Object.keys(pageLikeState).map((contentId) => (
//                     <ContentListItem
//                         key={contentArray[parseInt(contentId) - 1].id}
//                         title={contentArray[parseInt(contentId) - 1].title}
//                         image={contentArray[parseInt(contentId) - 1].image}
//                         text={contentArray[parseInt(contentId) - 1].text}
//                         id={contentArray[parseInt(contentId) - 1].id}
//                         category={
//                             contentArray[parseInt(contentId) - 1].category
//                         }
//                         isLiked={pageLikeState[parseInt(contentId)]}
//                         toggleLikeState={toggleLikeState}
//                     />
//                 ))}
//             </div>
//         </>
//     )
// }

// export default FavContentList
