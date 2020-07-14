import React from 'react'
import { Link, navigate } from 'gatsby'
import Footer from '../components/footer'

import styles from './404.module.scss'

const NotFound = props => {
    return (
        <React.Fragment>
            <div className={styles.container}>
                <div
                    className={styles.arrow}
                    onClick={() => {
                        navigate('/')
                    }}
                    role='button'
                    onKeyDown={() => {
                        navigate('/')
                    }}
                ></div>
                <div>
                    <h1>Not Found</h1>
                    <p>You just hit a route that doesn&#39;t exist...</p>
                    <Link to='/'>{'Go Back'}</Link>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default NotFound
