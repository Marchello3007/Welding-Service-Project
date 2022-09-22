import React from 'react'

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
            <AppHeader title="Yo" />
            <AppHeader title="Yo Yo" />
            <AppList />
        </>
    )
}

export default App
