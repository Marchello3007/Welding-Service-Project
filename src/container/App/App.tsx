import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { useState } from 'react'
import ModalPhones from 'components/ModalPhones/ModalPhones'

type Props = {}

type PageLikeStateProps = {
    [id: number]: boolean
}

type ModalProps = {
    modalstatus: boolean
    // setModalActive: (modalstatus: boolean) => void
}

const App = (props: Props) => {
    const [pageLikeState, setPageLikeState] = useState<PageLikeStateProps>({
        // 7: true,
        // 9: true,
        // 11: true,
    })

    const toggleLikeState = (id: number) => {
        setPageLikeState((prevState: PageLikeStateProps) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    const [modalActive, setModalActive] = useState<ModalProps>({
        modalstatus: false,
    })

    return (
        <>
            <CssBaseline />
            <Header />
            {/* <ModalPhones
                modalstatus={modalActive.modalstatus}
                setModalActive={setModalActive}
            /> */}
            <Main
                pageLikeState={pageLikeState}
                toggleLikeState={toggleLikeState}
            />
            <Footer />
        </>
    )
}

export default App
