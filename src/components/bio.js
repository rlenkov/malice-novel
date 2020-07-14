import React from 'react'

import styles from './bio.module.scss'

const Bio = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.disclaimer}>
                <h2 className={styles.header}>Hello</h2>
                <h2 className={styles.header}>I am Valerija</h2>
            </div>
            <div className={styles.description}>
                <p>
                    Hello, I am Valerija Huszar, and I am a nobody. Or at least
                    I was. I used to be a clerk at the Imperial University,
                    serving the Oligarchy of Sandorgrad with knowledge and
                    power. Now I'm something more significant and dangerous.
                </p>
                <p>I'm Valerija Huszar, but you can call me Val.</p>
            </div>
        </div>
    )
}

export default Bio
