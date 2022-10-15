import React from 'react'
import './PageTempl.scss'

type Props = {
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

    dscr: string
}

const PageTempl = ({
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

    dscr,
}: Props) => {
    return (
        <>
            <div className="page-templ-container">
                <div className="page-templ-head-block">
                    <div className="page-templ-head-block-ttl">{headTitle}</div>
                    <img
                        className="page-templ-head-block-image"
                        src={headImage}
                        alt=""
                    />
                    <div className="page-templ-head-block-text">{headText}</div>
                </div>

                <div className="page-templ-additional-block">
                    <div className="page-templ-additional-block-dscr">
                        {dscr}
                    </div>
                    <div className="page-templ-additional-item">
                        <img
                            className="page-templ-image-additional"
                            src={itemImage1}
                            alt=""
                        />
                        <span className="page-templ-text-additional-ttl">
                            {itemTitle1}
                        </span>
                        <span className="page-templ-text-additional-text">
                            {itemText1}
                        </span>
                    </div>

                    <div className="page-templ-additional-item">
                        <img
                            className="page-templ-image-additional"
                            src={itemImage2}
                            alt=""
                        />
                        <span className="page-templ-text-additional-ttl">
                            {itemTitle2}
                        </span>
                        <span className="page-templ-text-additional-text">
                            {itemText2}
                        </span>
                    </div>
                    <div className="page-templ-additional-item">
                        <img
                            className="page-templ-image-additional"
                            src={itemImage3}
                            alt=""
                        />
                        <span className="page-templ-text-additional-ttl">
                            {itemTitle3}
                        </span>
                        <span className="page-templ-text-additional-text">
                            {itemText3}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTempl
