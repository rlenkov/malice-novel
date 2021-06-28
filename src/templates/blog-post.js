import React from 'react'
import { Link, graphql } from 'gatsby'
import {
    PinterestShareButton,
    TwitterShareButton,
    PinterestIcon,
    TwitterIcon,
} from 'react-share'

import Layout from '../components/layout'
import SEO from '../components/seo'

import radLinesDeco from '../../content/assets/rad_lines_3.svg'
import 'normalize.css'
import * as styles from './blogPost.module.scss'

const BlogPostTemplate = ({ data, pageContext, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata.title
    const { previous, next } = pageContext
    console.log(location)
    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />
            <article className={styles.article}>
                <header className={styles.head}>
                    <h1
                        style={{
                            marginBottom: 0,
                            fontSize: '30px',
                        }}
                    >
                        {post.frontmatter.title}
                    </h1>
                    <p
                        style={{
                            display: `block`,
                        }}
                    >
                        {post.frontmatter.date}
                    </p>
                </header>
                <div className={styles.illustration}>
                    <img src={radLinesDeco} alt='Decoration of lines' />
                </div>
                <section className={styles.section} dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr style={{}} />
                <footer className={styles.footer}>
                    {/* Put some sharing options here */}
                    <TwitterShareButton
                        url={location.href}
                        title={`Malice - ${post.frontmatter.title}`}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <PinterestShareButton
                        url={location.href}
                        title={`Malice - ${post.frontmatter.title}`}
                    >
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                </footer>
            </article>

            <nav className={styles.navBar}>
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={previous.fields.slug} rel='prev'>
                                ← {previous.frontmatter.title}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={next.fields.slug} rel='next'>
                                {next.frontmatter.title} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`
