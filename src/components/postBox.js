import React from 'react'
import { Link } from 'gatsby'

import styles from './postBox.module.scss'

const PostBox = props => {
    return (
        <article key={props.slug} className={styles.postBox}>
            <header>
                <h3 style={{}}>
                    <Link style={{ boxShadow: `none` }} to={props.slug}>
                        {props.title}
                    </Link>
                </h3>
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
