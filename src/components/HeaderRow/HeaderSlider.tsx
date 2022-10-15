import React from 'react'
import './HeaderSlider.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Props = {}

const HeaderSlider = (props: Props) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        pauseOnHover: false,
        arrows: false,
    }

    return (
        <div className="header-slider">
            <div className="header-slider-text">
                <div className="header-slider-title">
                    <h2>Johnny</h2>
                    <h2>Go!</h2>
                </div>
                <h6 className="header-slider-description">Welding Services</h6>
            </div>

            <Slider {...settings}>
                <div className="header-slider-item">
                    <img
                        className="header-slider-image"
                        src="./images/slide-1.jpg"
                        alt=""
                    />
                </div>

                <div className="header-slider-item">
                    <img
                        className="header-slider-image"
                        src="./images/slide-2.jpg"
                        alt=""
                    />
                </div>
                <div className="header-slider-item">
                    <img
                        className="header-slider-image"
                        src="./images/slide-3.jpg"
                        alt=""
                    />
                </div>
            </Slider>
        </div>
    )
}

export default HeaderSlider
