import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'

type Props88 = {
    title: string
}

const AppHeader = (props: Props88) => {
    return <h1>Hello{props.title}</h1>
}

const AppList = () => {
    return <div>Bla Bla Bla</div>
}

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppHeader title="Yo" />
            <AppHeader title="Yo Yo" />
            <AppList />

            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App
