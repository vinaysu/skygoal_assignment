import React from 'react'
import styles from './Home.module.css'
import { Button } from '@mui/material'

function Home() {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <h3>Discover the beauty of tropics</h3>
            <h1>
               <span>Topical<br/>Destinations<br/></span> For Student
            </h1>
            <p>Lorem ipsum dolor sit amet consectetor. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae</p>
            <Button variant='outlined' sx={{backgroundColor:'orange',borderRadius:'2rem'}} >Sign Up</Button>

        </div>
        <div className={styles.right}>
            <div className={styles.image}>

            <img src='https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg'></img>
            </div>
        </div>
    </div>
  )
}

export default Home