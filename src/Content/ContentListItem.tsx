import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './ContentListItem.scss'
import classes from './ContentListItem.module.scss'
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

const ContentListItem = ({
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
            <div className="contentlistitem-container">
                <div className="contentlistitem-content">
                    <div className="contentlistitem-content-title">
                        <h3>
                            <Link
                                className={classes.textDcorationNone}
                                to={`../${id}`}
                            >
                                {title}
                            </Link>
                        </h3>
                        <div className="contentlistitem-content-title-like-btn">
                            <Button onClick={() => toggleLikeState(id)}>
                                {isLiked ? (
                                    <div className="contentlistitem-icon-color">
                                        <FavoriteIcon />
                                    </div>
                                ) : (
                                    <div className="contentlistitem-icon-color">
                                        <FavoriteBorderIcon />
                                    </div>
                                )}
                            </Button>
                        </div>
                    </div>
                    <img
                        className="contentlistitem-content-image"
                        src={image}
                        alt=""
                    />

                    <div className="contentlistitem-content-text">{text}</div>
                </div>
            </div>
        </>
    )
}

export default ContentListItem
