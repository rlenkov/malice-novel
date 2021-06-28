import React from 'react'
import { navigate } from 'gatsby'

import * as styles from './postBox.module.scss'

const PostBox = props => {
    return (
        <article
            key={props.slug}
            id={`post-box-${props.slug}`}
            className={props.visible ? styles.postBox : [styles.postBox, styles.hidden].join(' ')}
        >
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
