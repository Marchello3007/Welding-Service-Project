import HeaderRow from 'components/HeaderRow/HeaderRow'
import HeaderSlider from 'components/HeaderRow/HeaderSlider'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <HeaderRow />
            <HeaderSlider />
        </>
    )
}

export default Header
