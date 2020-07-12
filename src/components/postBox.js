import React from 'react'
import { navigate } from 'gatsby'

import styles from './postBox.module.scss'

const PostBox = props => {
    return (
        <article key={props.slug} className={styles.postBox}>
            <header
                onClick={() => {
                    navigate(props.slug)
                }}
            >
                <h3 className={styles.postTitle}>{props.title}</h3>
                <small>{props.date}</small>
            </header>
            <section
                className={styles.postSection}
                onClick={() => {
                    navigate(props.slug)
                }}
            >
                <p
                    dangerouslySetInnerHTML={{
                        __html: props.description || props.excerpt,
                    }}
                />
            </section>
        </article>
    )
}

export default PostBox
