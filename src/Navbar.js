import React from 'react'
import { Button } from '@mui/material'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <h5>Home</h5>
            <h5>About</h5>
            <h5>Schedules</h5>
            <h5>Membership</h5>
            <h5>Pricing</h5>


        </div>
        <div className={styles.right}>
            <Button  >Offers</Button>
            <Button variant='filled' sx={{backgroundColor:'orange',borderRadius:'5rem'}} >Courese</Button>


        </div>
    </div>
  )
}

export default Navbar