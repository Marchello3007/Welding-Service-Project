import HeaderImage from 'components/HeaderRow/HeaderImage'
import HeaderRow from 'components/HeaderRow/HeaderRow'
import HeaderSlider from 'components/HeaderRow/HeaderSlider'
import './Header.scss'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <HeaderRow />
            {/* <HeaderImage /> */}
            <HeaderSlider />
        </>
    )
}

export default Header
