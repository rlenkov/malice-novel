import React from 'react'

import styles from './sky.module.scss'

const Sky = () => {
    return (
        <div className={styles.skyBox}>
            <div className={[styles.stars, styles.small].join(' ')}></div>
            <div className={[styles.stars, styles.medium].join(' ')}></div>
            <div className={[styles.stars, styles.large].join(' ')}></div>
        </div>
    )
}

export default Sky
