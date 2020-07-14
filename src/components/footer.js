import React from 'react'
import { Link } from 'gatsby'

import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>{`© ${new Date().getFullYear()}, Malice`}</p>
            <Link to='about'>About</Link>
        </footer>
    )
}

export default Footer
