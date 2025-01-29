"use client"
import { useState, useEffect } from 'react';
import styles from './AboutUs.module.scss'
import Image from 'next/image'
import photo from '../../../public/images/victory-photo.png'
import { WithAnimation } from 'app/utils/withAnimation';
import { AnimatedCounter } from 'app/utils/animatedCounter';
export const AboutUs = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 430);
    };

    handleResize(); // Проверяем при загрузке
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles['about-section']}>
        <header className={styles['about-section__header']}>
          
          <WithAnimation animationClass="fade-in" delay={300}>
            <h2 className={styles['about-section__title']}><span>Нам доверяют</span>  свои финансы</h2>
          </WithAnimation>
          <WithAnimation animationClass="slide-in-right" delay={700}>
            <div className={styles['about-section__picture']}></div>
          </WithAnimation>
        </header>
        
        <h3 className={styles['about-section__subtitle']}>Находим возможности для оптимизации налогов.</h3>
        <div className={styles['about-section__results']}>
            <ul className={styles['about-section__results-list']}>
              <li className={styles['about-section__result-item']}>
              <WithAnimation animationClass="fade-in" delay={700}>
                <p className={styles['about-section__result-counter']}>
                  <AnimatedCounter from={1} to={10} duration={1500} />
                </p>
                </WithAnimation>
                <p>миллионов рублей смогли сохранить наши клиенты, что позволило им направить эти средства на дальнейшее развитие своего бизнеса. </p>
              </li>
              <li className={styles['about-section__result-item']}>
              <WithAnimation animationClass="fade-in" delay={1000}>
                <p className={styles['about-section__result-counter']}>
                <AnimatedCounter from={0} to={3.4} duration={2500} decimals={1} />
                </p>
                </WithAnimation>
                <p>миллионов рублей недоначислений удалось отстоять нашему клиенту, благодаря имеющимся у нас профессионализму и глубоким познаниям налогового законодательства.</p>
              </li>
              <li className={styles['about-section__result-item']}>
              <WithAnimation animationClass="fade-in" delay={700}>
                <p className={styles['about-section__result-counter']}>
                  <AnimatedCounter from={0} to={2} duration={1500} />
                </p>
                </WithAnimation>
                <p>миллиона рублей было сэкономлено за полгода при индивидуальном согласовании снижения комиссии на банковские услуги для одной из наших компаний.</p>
              </li>
            </ul>
        
            <WithAnimation animationClass="fade-in" delay={700}>
            <Image
              className={styles['about-section__photo']}
              // src={photo}
              // src={isSmallScreen ? photo_sm : photo}
              src={photo}

              alt="Picture of the author"
              sizes="(max-width: 430px) 100px, (max-width: 768px) 500px, 1000px"
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
            />
            </WithAnimation>
           
            

        </div>
        <WithAnimation>
        <p className={styles['about-section__ending-phrase']}>Каждый клиент уникален, поэтому мы подходим к решению задач индивидуально.</p>
        </WithAnimation>
    </section>
  )
}
