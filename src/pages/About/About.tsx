import ContentList from 'Content/ContentList'
import contentArray from 'Content/content'
import contentExtArray from 'Content/contentExt'

import React from 'react'
import PageTempl from 'components/PageTempl/PageTempl'

type Props = {
    pageLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

type ContentExtProps = {
    headTitle: string
    headImage: string
    headText: string

    itemImage1: string
    itemImage2: string
    itemImage3: string

    itemTitle1: string
    itemTitle2: string
    itemTitle3: string

    itemText1: string
    itemText2: string
    itemText3: string

    id: number
    category: string
    dscr: string
}

const About = ({ pageLikeState, toggleLikeState }: Props) => {
    const cat = 'about'
    const currentId1 = 605
    return (
        <>
            {/* {contentArray
                .filter(({ id }: ContentProps) => id == Number(currentId1))
                .map(({ title, image, text }: ContentProps) => (
                    <PageTempl title={title} image={image} text={text} />
                ))} */}

            {contentExtArray
                .filter(({ id }: ContentExtProps) => id == Number(currentId1))
                .map(
                    ({
                        headTitle,
                        headImage,
                        headText,

                        itemImage1,
                        itemImage2,
                        itemImage3,

                        itemTitle1,
                        itemTitle2,
                        itemTitle3,

                        itemText1,
                        itemText2,
                        itemText3,

                        id,
                        category,
                        dscr,
                    }: ContentExtProps) => (
                        <PageTempl
                            key={id}
                            headTitle={headTitle}
                            headImage={headImage}
                            headText={headText}
                            itemImage1={itemImage1}
                            itemImage2={itemImage2}
                            itemImage3={itemImage3}
                            itemTitle1={itemTitle1}
                            itemTitle2={itemTitle2}
                            itemTitle3={itemTitle3}
                            itemText1={itemText1}
                            itemText2={itemText2}
                            itemText3={itemText3}
                            dscr={dscr}
                        />
                    )
                )}

            <ContentList
                cat={cat}
                pageLikeState={pageLikeState}
                toggleLikeState={toggleLikeState}
            />
        </>
    )
}

export default About
