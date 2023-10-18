import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.main}>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Sales and refunds</p>
        <p>Legal</p>
        <p>About</p>
        <p>Schedules</p>
        <p>Pricing</p>
        <p>Membership</p>
    </div>
  )
}

export default Footer