import React from 'react'
import { navigate } from 'gatsby'

import styles from './postBox.module.scss'

const PostBox = props => {
    return (
        <article
            key={props.slug}
            className={styles.postBox}
            onClick={() => {
                navigate(props.slug)
            }}
        >
            <header>
                <h3 style={{}}>{props.title}</h3>
                <small>{props.date}</small>
            </header>
            <section>
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
