import LandingPage from 'components/LandingPage/LandingPage'
import { type } from 'os'
import About from 'pages/About/About'
import ArticlePage from 'pages/ArticlePage/ArticlePage'
// import ArticlePage2 from 'pages/ArticlePage/ArticlePage'
import Contacts from 'pages/Contacts/Contacts'
import Delivery from 'pages/Delivery/Delivery'
import Fav from 'pages/Fav/Fav'
import Home from 'pages/Home/Home'
import Reviews from 'pages/Reviews/Reviews'
import TheClients from 'pages/TheClients/TheClients'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Props = {
    pageLikeState: {
        [id: number]: boolean
    }
    toggleLikeState: (id: number) => void
}

const Main = ({ pageLikeState, toggleLikeState }: Props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/about"
                    element={
                        <About
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <Contacts
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="/delivery"
                    element={
                        <Delivery
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="/reviews"
                    element={
                        <Reviews
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path="/clients"
                    element={
                        <TheClients
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
                <Route
                    path=":id"
                    element={
                        <ArticlePage
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />

                <Route path=":id" element={<LandingPage />} />

                <Route
                    path="/fav"
                    element={
                        <Fav
                            pageLikeState={pageLikeState}
                            toggleLikeState={toggleLikeState}
                        />
                    }
                />
            </Routes>
        </>
    )
}

export default Main
