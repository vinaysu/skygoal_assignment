import React from 'react'
import styles from './UnderHome.module.css'
import Card_UnderHome from './Card_UnderHome'
import { Button } from '@mui/material'
function UnderHome() {


    const data = [
        {
            image: 'https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg',
            title: 'Jenny Wilson',
            description: 'Lorem ipsum dolor sit amet concepecteur adipiscing'
        },
        {
            image: 'https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg',
            title: 'Jenny Wilson',
            description: 'Lorem ipsum dolor sit amet concepecteur adipiscing'
        },
        {
            image: 'https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg',
            title: 'Jenny Wilson',
            description: 'Lorem ipsum dolor sit amet concepecteur adipiscing'
        },


    ]



    return (
        <div className={styles.main}>
            <div className={styles.left}>

                {
                    data.map((ele) =>
                        <Card_UnderHome
                            image={ele.image}
                            title={ele.title}
                            description={ele.description}
                        />

                    )
                }

            </div>
            <div className={styles.right}>

                <h1>Tropical Adventure <br /> for students</h1>
                <h5>Student Tropical Vacation : Relax and Recharge</h5>
                <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Massa quis natoque sit quam</li>
                    <li>Eros non pellentesque elit </li>
                    <li>tortor id euismod habitant</li>
                    <li>sed suspendisse id in ultrices</li>
                </ul>

                <Button sx={{backgroundColor:'orange', borderRadius:'2rem'}} >Explore More</Button>


            </div>

        </div>
    )
}

export default UnderHome