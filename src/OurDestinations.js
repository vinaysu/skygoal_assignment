import React from 'react'
import Card_desinations from './Card_desinations'
import styles from './OurDestinations.module.css'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

function OurDestinations() {

    const images = [
        {
            image: 'https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            name: 'Harvard University',
            caption: "Cambridge, UK"
        },
        {
            image: 'https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0aWVzfGVufDB8fDB8fHww&w=1000&q=80',
            name: 'Oxford University',
            caption: "Oxford England"
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_qqCbstx4kP7KXky1dbEgvVeREtDN9L7OMJ5JXKp&s',
            name: 'Standford University',
            caption: "Standford"
        },
        {
            image: 'https://www.shutterstock.com/image-photo/yale-university-buildings-spring-blue-260nw-192516860.jpg',
            name: 'Nayand Technologies',
            caption: "Nayand, Singapur"
        },
        {
            image: 'https://www.usnews.com/cmsmedia/52/9e/40ae3728470f83d2903a813cb773/201002-ucla-stock.jpg',
            name: 'Tezpur University',
            caption: "Tezpur, India"
        },

    ]
    return (
        <div className={styles.main}>
            <h2>Our Destinations</h2>

            <div className={styles.cards}>
                {
                    images.map((ele) =>
                        <Card_desinations
                            image={ele.image}
                            name={ele.name}
                            caption={ele.caption}
                        />


                    )
                }
            </div>
            <div className={styles.slideBtn}>
                <WestIcon/>
                <h3>2</h3>/40
                <EastIcon />


            </div>


        </div>
    )
}

export default OurDestinations