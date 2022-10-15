import React from 'react'
import './HeaderImage.scss'
;<script
    type="text/javascript"
    src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
></script>

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
