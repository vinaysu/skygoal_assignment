import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import styles from './Card_destinations.module.css'

function Card_desinations({ image, name, caption }) {
    return (
        <div className={styles.main}>
            <img className={styles.image} src={image} />
            <span className={styles.name}>{name}</span>
            <div className={styles.capt}> 
                <span>{caption}</span>
                <MoreHorizIcon />
            </div>

        </div>
    )
}

export default Card_desinations