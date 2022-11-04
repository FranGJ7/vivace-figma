import styles from "../styles/carousel.module.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';


const Carousel = () => {

   return (
      <div className={styles.splideSection}>
         <Splide aria-label="My Favorite Images"
               options={{
                  perPage:3,
                  padding: 0,
                  gap:150,
                  arrows:false, 
                  pagination:true,
                  breakpoints: {
                     1540: {
                        gap:30
                     },
                     1347:{
                        gap:20
                     },
                     1247:{
                        perPage:2,
                        gap:10
                     },
                     615:{
                        perPage:1
                     }
                 },
               }}
         >
            <SplideSlide >
            <div className={styles.imgSplide}>
               <img src="../../img-inn/room1.png" alt="Image 1" />
               </div> 
            </SplideSlide>
            <SplideSlide>
            <div className={styles.imgSplide}>
               <img src="../../img-inn/room2.png" alt="Image 2" />
               </div>

            </SplideSlide>
            <SplideSlide>
            <div className={styles.imgSplide}>
               <img src="../../img-inn/room3.png" alt="Image 2" />
               </div>

            </SplideSlide>
            <SplideSlide>
            <div className={styles.imgSplide}>
               <img src="../../img-inn/room4.png" alt="Image 2" />
               </div>

            </SplideSlide>
         </Splide>




      </div>
   )


}

export default Carousel