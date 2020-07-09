import React from 'react'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'

import styles from './header.module.scss'

export const Header = props => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{props.title}</h1>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
                <path
                    fill='#0d0b12'
                    fill-opacity='1'
                    d='M0,128L26.7,138.7C53.3,149,107,171,160,186.7C213.3,203,267,213,320,224C373.3,235,427,245,480,229.3C533.3,213,587,171,640,170.7C693.3,171,747,213,800,234.7C853.3,256,907,256,960,218.7C1013.3,181,1067,107,1120,96C1173.3,85,1227,139,1280,149.3C1333.3,160,1387,128,1413,112L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
                ></path>
            </svg>
        </div>
    )
}

export const BackButton = () => {
    return (
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
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
