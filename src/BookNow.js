import React from 'react'
import styles from './BookNow.module.css'
import { TextField } from '@mui/material'

function BookNow() {
  return (
    <div className={styles.main}>
      <div className={styles.left} >
        <img className={styles.image} src='https://i.pinimg.com/736x/aa/c9/4e/aac94e41310947cbcd5f38a41ccc0132.jpg' />

      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <h4>Book Now</h4>
          <p>lorem ipsum dole sihf sdfsdf sfwrfywf wfywfhghsfw hsdf</p>

          <div className={styles.inbox}>
            <div className={styles.top}>
              <caption>city</caption>
              <input placeholder='Enter the city'></input>

            </div>
            <div className={styles.middle}>
              <div className={styles.l}>
                <caption>Arrival</caption>
                <input placeholder='10 October' className={styles.input}></input>

              </div>
              <div className={styles.r}>
                <caption>Departure</caption>
                <input placeholder='11 October' className={styles.input} ></input>

              </div>

            </div>
            <div className={styles.middle}>
              <div className={styles.l}>
                <caption>Star</caption>
                <div className={styles.btn}>
                  <button>-</button>
                  4
                  <button>+</button>
                </div>

              </div>
              <div className={styles.r}>
                <caption>Room</caption>
                <div className={styles.btn}>
                  <button>-</button>
                  1
                  <button>+</button>
                </div>

              </div>



            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default BookNow