import styles from './AboutUs.module.scss'
import Image from 'next/image'
import photo from '../../../public/images/victory-photo.png'


export const AboutUs = () => {
  return (
    <section className={styles['about-section']}>
        <header className={styles['about-section__header']}>
          <h2 className={styles['about-section__title']}><span>Нам доверяют</span>  свои финансы</h2>
          <div className={styles['about-section__picture']}></div>
        </header>
        
        <h3 className={styles['about-section__subtitle']}>Находим возможности для оптимизации налогов.</h3>
        <div className={styles['about-section__results']}>
            <ul className={styles['about-section__results-list']}>
              <li className={styles['about-section__result-item']}>
                <p>10</p>
                <p>миллионов рублей смогли сохранить наши клиенты, что позволило им направить эти средства на дальнейшее развитие своего бизнеса. </p>
              </li>
              <li className={styles['about-section__result-item']}>
                <p>3,4</p>
                <p>миллионов рублей недоначислений удалось отстоять нашему клиенту, благодаря имеющимся у нас профессионализму и глубоким познаниям налогового законодательства.</p>
              </li>
              <li className={styles['about-section__result-item']}>
                <p>2</p>
                <p>миллиона рублей было сэкономлено за полгода при индивидуальном согласовании снижения комиссии на банковские услуги для одной из наших компаний.</p>
              </li>
            </ul>
            <Image
              className={styles['about-section__photo']}
              src={photo}
              alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />

        </div>
        <p className={styles['about-section__ending-phrase']}>Каждый клиент уникален, поэтому мы подходим к решению задач индивидуально.</p>
    </section>
  )
}
