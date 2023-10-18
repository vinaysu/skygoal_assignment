import { Button } from '@mui/material'
import React from 'react'
import styles from './Discount.module.css'

function Discount() {
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <p>Get 20 % off for the students</p>
                <h3 className={styles.text}>student discounts available</h3>
                <h3>Get ready for some fun in the sun!</h3>

                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                </ul>
                <Button sx={{ backgroundColor: 'orange', borderRadius: '2rem' }} > Explore More</Button>

            </div>
            <div className={styles.right}>
                <div className={styles.image}>

                    <img src='https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg'></img>
                </div>

            </div>
        </div>
    )
}

export default Discount