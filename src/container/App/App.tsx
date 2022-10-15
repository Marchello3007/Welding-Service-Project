import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { useState } from 'react'

type Props = {}

type PageLikeStateProps = {
    [id: number]: boolean
}

const App = (props: Props) => {
    const [pageLikeState, setPageLikeState] = useState<PageLikeStateProps>({})

    const toggleLikeState = (id: number) => {
        setPageLikeState((prevState: PageLikeStateProps) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header />
            <Main
                pageLikeState={pageLikeState}
                toggleLikeState={toggleLikeState}
            />
            <Footer />
        </>
    )
}

export default App
