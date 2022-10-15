import React from 'react'
import './HeaderImage.scss'

type Props = {}

const HeaderImage = (props: Props) => {
    return (
        <>
            <div className="header-background-image">
                <div>
                    <div className="header-title">Welding</div>
                    <div className="header-title">Services</div>
                </div>
            </div>
        </>
    )
}

export default HeaderImage
