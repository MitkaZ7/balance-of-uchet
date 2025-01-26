import styles from './Intro.module.scss'
import { WithAnimation } from 'app/utils/withAnimation'
export const Intro = () => {
  return (
    <section className={styles.intro}>
      <WithAnimation animationClass="fade-in" delay={700}>
        <div className={styles.intro__content}>
            <h1 className={styles.intro__title}>Баланс учёта и налогов:</h1>
            <h2 className={styles.intro__subtitle}>оказание услуг по ведению 
              бухгалтерского и налогового учёта</h2>
        </div>
        </WithAnimation>
    </section>
  )
}
