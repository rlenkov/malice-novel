import React from 'react'

import { Header, BackButton } from '../components/header'
import Footer from '../components/footer'

const Layout = ({ location, title, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
        header = <Header title={title} />
    } else {
        header = <BackButton />
    }
    return (
        <React.Fragment>
            <header>{header}</header>
            <main>{children}</main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
