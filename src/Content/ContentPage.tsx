import React from 'react'
import './ContentPage.scss'
import { Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type ContentProps = {
    title: string
    image: string
    text: string
    id: number
    category: string
    isLiked?: boolean
    toggleLikeState: (id: number) => void
}

const ContentPage = ({
    title,
    image,
    text,
    id,
    category,
    isLiked = false,
    toggleLikeState,
}: ContentProps) => {
    return (
        <>
            <div className="content-page-container">
                <div className="content-page-title">
                    <div className="empty-element"></div>
                    <h2>{title}</h2>
                    <div className="content-page-btn-like">
                        {/* <Button
                            variant="outlined"
                            onClick={() => toggleLikeState(id)}
                        >
                            {' '}
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button> */}

                        <Button onClick={() => toggleLikeState(id)}>
                            {isLiked ? (
                                <div className="content-page-icon-color">
                                    <FavoriteIcon />
                                </div>
                            ) : (
                                <div className="content-page-icon-color">
                                    <FavoriteBorderIcon />
                                </div>
                            )}
                        </Button>
                    </div>
                </div>

                <div className="content-page-content-1">
                    <img className="content-page-image" src={image} alt="" />
                    <div className="content-page-text-1">{text}</div>
                </div>
                <div className="content-page-content-2">
                    <div className="content-page-text-2">{text}</div>
                </div>
                <div className="content-page-content-3">
                    <div className="content-page-text-3">{text}</div>
                </div>

                <div className="content-page-info">
                    <div className="content-page-id">{id}</div>
                    <div className="content-page-category">{category}</div>
                </div>
            </div>
        </>
    )
}

export default ContentPage
