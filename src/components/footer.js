import React from 'react'

import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            © {new Date().getFullYear()}, Malice
        </footer>
    )
}

export default Footer
