import styles from './BenefitsSummary.module.scss'


export const BenefitsSummary = () => {
  return (
    <aside className={styles['summary']}>
      <p className={styles['summary__text-paragraph']}>
        Мы верим, что настоящая ценность заключается в <em className={styles['summary__text-accent']}>качестве</em>, а не в количестве обслуживаемых клиентов. 
      </p>
      <p className={styles['summary__text-paragraph']}>
        <em className={styles['summary__text-accent']}> Наша главная цель: </em> 
        высокое качество работы, что является основой нашего успеха и доверия клиентов. 
      </p>
    </aside>
  )
}
