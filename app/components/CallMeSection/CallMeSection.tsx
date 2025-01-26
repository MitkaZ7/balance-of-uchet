import styles from './CallMeSection.module.scss'
import { WithAnimation } from 'app/utils/withAnimation'
export const CallMeSection = () => {
  return (
    <section className={styles['callme-section']}>
        <WithAnimation animationClass="fade-in" delay={700}>
        <h2 className={styles['callme-section__title']}>Баланс как искусство - точность и надежность в каждом отчете</h2>
        </WithAnimation>
        <WithAnimation animationClass="fade-in" delay={700}>
        <div className={styles['callme-section__content']}>
          <WithAnimation animationClass="fade-in" delay={700}>
            <div className={styles['callme-section__image_place_left']}></div>
          </WithAnimation>
          <a href="https://t.me/Viktoriya_pronalogi_buhgalter" className={styles['callme-section__button']}>
          Заказать консультацию
          </a>

          <WithAnimation animationClass="fade-in" delay={700}>
            <div className={styles['callme-section__image_place_right']}></div>
          </WithAnimation>
        </div>
        </WithAnimation>
    </section>
    
  )
}

