import React, { useEffect } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Sky from '../components/addons/sky'
import PropTypes from 'prop-types'

import styles from './header.module.scss'

export const Header = props => {
    useEffect(() => {
        const isClient = typeof window === 'object'
        if (isClient) {
            const video = document.getElementById('background-video')
            video.playbackRate = 0.5
        }
    }, [])

    const data = useStaticQuery(graphql`
        query {
            video: s3Asset(id: { eq: "f087938d-a6eb-5dcf-bf9d-9c73579f3ed7" }) {
                url
            }
            image: s3Asset(id: { eq: "b42b8177-a4ea-5769-83fb-c5842eb0eeb1" }) {
                url
            }
        }
    `)
    return (
        <div className={styles.header}>
            {/* <div className={styles.stars} style={{background: `#000 url(${data.image.url}) repeat top center`}}></div> */}
            <Sky />
            <video id='background-video' autoPlay muted loop playsInline>
                <source
                    src={data.video.url}
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
            </video>
            <h1 className={styles.title}>{props.title}</h1>
            {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                    fill='#0d0b12'
                    fillOpacity='1'
                    d='M0,128L26.7,138.7C53.3,149,107,171,160,186.7C213.3,203,267,213,320,224C373.3,235,427,245,480,229.3C533.3,213,587,171,640,170.7C693.3,171,747,213,800,234.7C853.3,256,907,256,960,218.7C1013.3,181,1067,107,1120,96C1173.3,85,1227,139,1280,149.3C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
                ></path>
            </svg> */}
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                    fill='#0d0b12'
                    fill-opacity='0.7'
                    d='M0,64L0,96L42.4,96L42.4,224L84.7,224L84.7,32L127.1,32L127.1,256L169.4,256L169.4,64L211.8,64L211.8,320L254.1,320L254.1,128L296.5,128L296.5,128L338.8,128L338.8,32L381.2,32L381.2,224L423.5,224L423.5,256L465.9,256L465.9,224L508.2,224L508.2,128L550.6,128L550.6,288L592.9,288L592.9,320L635.3,320L635.3,128L677.6,128L677.6,288L720,288L720,128L762.4,128L762.4,64L804.7,64L804.7,192L847.1,192L847.1,64L889.4,64L889.4,0L931.8,0L931.8,128L974.1,128L974.1,224L1016.5,224L1016.5,160L1058.8,160L1058.8,32L1101.2,32L1101.2,320L1143.5,320L1143.5,288L1185.9,288L1185.9,96L1228.2,96L1228.2,224L1270.6,224L1270.6,160L1312.9,160L1312.9,256L1355.3,256L1355.3,256L1397.6,256L1397.6,320L1440,320L1440,320L1397.6,320L1397.6,320L1355.3,320L1355.3,320L1312.9,320L1312.9,320L1270.6,320L1270.6,320L1228.2,320L1228.2,320L1185.9,320L1185.9,320L1143.5,320L1143.5,320L1101.2,320L1101.2,320L1058.8,320L1058.8,320L1016.5,320L1016.5,320L974.1,320L974.1,320L931.8,320L931.8,320L889.4,320L889.4,320L847.1,320L847.1,320L804.7,320L804.7,320L762.4,320L762.4,320L720,320L720,320L677.6,320L677.6,320L635.3,320L635.3,320L592.9,320L592.9,320L550.6,320L550.6,320L508.2,320L508.2,320L465.9,320L465.9,320L423.5,320L423.5,320L381.2,320L381.2,320L338.8,320L338.8,320L296.5,320L296.5,320L254.1,320L254.1,320L211.8,320L211.8,320L169.4,320L169.4,320L127.1,320L127.1,320L84.7,320L84.7,320L42.4,320L42.4,320L0,320L0,320Z'
                ></path>
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                    fill='#0d0b12'
                    fill-opacity='1'
                    d='M0,128L0,32L48,32L48,224L96,224L96,96L144,96L144,128L192,128L192,96L240,96L240,0L288,0L288,160L336,160L336,288L384,288L384,192L432,192L432,224L480,224L480,192L528,192L528,224L576,224L576,96L624,96L624,32L672,32L672,96L720,96L720,96L768,96L768,288L816,288L816,256L864,256L864,32L912,32L912,96L960,96L960,288L1008,288L1008,160L1056,160L1056,64L1104,64L1104,256L1152,256L1152,160L1200,160L1200,224L1248,224L1248,32L1296,32L1296,32L1344,32L1344,160L1392,160L1392,32L1440,32L1440,320L1392,320L1392,320L1344,320L1344,320L1296,320L1296,320L1248,320L1248,320L1200,320L1200,320L1152,320L1152,320L1104,320L1104,320L1056,320L1056,320L1008,320L1008,320L960,320L960,320L912,320L912,320L864,320L864,320L816,320L816,320L768,320L768,320L720,320L720,320L672,320L672,320L624,320L624,320L576,320L576,320L528,320L528,320L480,320L480,320L432,320L432,320L384,320L384,320L336,320L336,320L288,320L288,320L240,320L240,320L192,320L192,320L144,320L144,320L96,320L96,320L48,320L48,320L0,320L0,320Z'
                ></path>
            </svg>
        </div>
    )
}

export const BackButton = () => {
    return (
        <div className={styles.smallHeader}>
            <div
                className={styles.arrow}
                onClick={() => {
                    navigate('/')
                }}
                role='button'
                onKeyDown={() => {
                    navigate('/')
                }}
            ></div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
