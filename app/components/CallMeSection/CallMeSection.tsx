import { Button } from '@components/Button/Button'
import styles from './CallMeSection.module.scss'
export const CallMeSection = () => {
  return (
    <section className={styles['callme-section']}>
        <h2 className={styles['callme-section__title']}>Баланс как искусство - точность и надежность в каждом отчете</h2>
        <div>
          <div className={styles['callme-section__image_place_left']}></div>
          <Button/>
          <div className={styles['callme-section__image_place_right']}></div>
        </div>
    </section>
    
  )
}

