import Image from 'next/image'
import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'


export default function Services() {
    return (
        <>
            <div className={css.heading}>
                <span>WHAT WE SERVE</span>
                <span>Your Favourite Food</span>
                <span> Delevery Partner</span>
            </div>

            {/* features */}
            <dic className={css.services}>
                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s1} alt="" objectFit="cover" layout="intrinsic" />
                    </div>

                    <span>Easy to Oder</span>
                    <span>You only need a few steps in food ordering</span>
                </div>

                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s2} alt="" objectFit="cover" layout="intrinsic" />
                    </div>

                    <span>Easy to Oder</span>
                    <span>Delivery that is always on time even faster</span>
                </div>
                
                <div className={css.feature}>
                    <div className={css.ImageWrapper}>
                        <Image src={s3} alt="" objectFit="cover" layout="intrinsic" />
                    </div>

                    <span>Easy to Oder</span>
                    <span>Not only fast for us, quality is also number one</span>
                </div>
            </dic>
        </>
    )
}