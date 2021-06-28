import React from 'react'
import { Link } from 'gatsby'

import * as styles from './footer.module.scss'

const Footer = props => {
    return (
        <footer className={styles.footer}>
            <p>{`© ${new Date().getFullYear()}, Malice`}</p>
            {props.isRoot ? (
                <Link to='about'>About</Link>
            ) : (
                <Link to='/'>Home</Link>
            )}
        </footer>
    )
}

export default Footer
