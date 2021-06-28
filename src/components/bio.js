import React, { useState, useEffect } from 'react'

import radLinesOne from '../../content/assets/rad_lines_1.svg'
import radLinesTwo from '../../content/assets/rad_lines_2.svg'
import * as styles from './bio.module.scss'

const Bio = () => {
    const [modal, setModal] = useState(false)

    const escFunction = event => {
        if (event.keyCode === 27) {
            setModal(false)
        }
    }

    useEffect(() => {
        const isClient = typeof window === 'object'
        if (isClient) {
            document.addEventListener('keydown', escFunction, false)

            return () => {
                document.removeEventListener('keydown', escFunction, false)
            }
        }
    }, [])

    return (
        <div className={styles.aboutContainer}>
            {modal ? (
                <div
                    className={styles.authorModal}
                    onClick={() => {
                        setModal(false)
                    }}
                >
                    <p>
                        The author of this story is staying anonymous for now.
                    </p>
                    <p>Check back later.</p>
                    <button
                        type='button'
                        onClick={() => {
                            setModal(false)
                        }}
                    >
                        <span>Exit</span>
                    </button>
                </div>
            ) : null}
            <div className={styles.disclaimer}>
                <h2 className={styles.header}>Hello</h2>
                <h2 className={styles.header}>I am Valerija</h2>
            </div>

            <div className={styles.description}>
                <p>Hello, I am Valerija Huszar, and this is my story.</p>
                <p>
                    I used to be a clerk at the Imperial University, serving the
                    corrupt Oligarchs and statesman of Sandorgrad. But I've
                    become something much more significant and dangerous.
                </p>
                <p>
                    I was given a gift of{' '}
                    <strong className={styles.powerful}>
                        fathomless darkness
                    </strong>
                    . Now I can't stop running.
                </p>
                <div className={styles.illustration}>
                    <img src={radLinesOne} alt='Decoration of lines' />
                </div>
            </div>
            <div className={styles.descriptionTwo}>
                <p>
                    I must go through the highest towers and the deepest alleys
                    to find my answers amongst all the fake delights, whispered
                    lies, and luxurious depravity of the city.
                </p>
                <p>
                    But to understand it all, one must understand that in this
                    world, there is no light.
                </p>
                <p>
                    I'm Valerija Huszar, but you can call me{' '}
                    <strong className={styles.powerful}>Val.</strong>
                </p>
                <div className={styles.illustrationTwo}>
                    <img src={radLinesTwo} alt='Another decoration of lines' />
                </div>
            </div>
            <div className={styles.more}>
                <button
                    type='button'
                    onClick={() => {
                        setModal(true)
                    }}
                >
                    <span>more...</span>
                </button>
            </div>
        </div>
    )
}

export default Bio
