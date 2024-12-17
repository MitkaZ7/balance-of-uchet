import styles from './Intro.module.scss'
export const Intro = () => {
  return (
    <section className={styles.intro}>
        <div className={styles.intro__content}>
            <h1 className={styles.intro__title}>Баланс учёта и налогов:</h1>
            <h2 className={styles.intro__subtitle}>оказание услуг по ведению бухгалтерского и налогового учёта</h2>
        </div>
    </section>
  )
}
