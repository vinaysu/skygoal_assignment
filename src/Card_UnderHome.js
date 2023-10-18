import React from 'react'
import styles from './Card_UnderHome.module.css'

function Card_UnderHome({ title, description, image }) {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <img className={styles.image} src={image}></img>

            </div>
            <div className={styles.right}>
                <h3>{title}</h3>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default Card_UnderHome