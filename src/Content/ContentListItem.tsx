import { Button, Card, CardContent } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './ContentListItem.scss'
// import './TestContentListItem.module.scss'
import classes from './TestContentListItem.module.scss'
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
                            <Button
                                // variant="outlined"
                                onClick={() => toggleLikeState(id)}
                            >
                                {isLiked ? (
                                    <div className="icon-color">
                                        <FavoriteIcon />
                                    </div>
                                ) : (
                                    <div className="icon-color">
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
