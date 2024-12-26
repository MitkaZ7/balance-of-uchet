import servicesData from '../../data/services.json'
import { ServicesData } from 'app/types/service';
import { ServiceCard } from '@components/ServiceCard/ServiceCard';
import styles from './Services.module.scss'
export const Services = () => {

    const { services } = servicesData as ServicesData;

    

  return (
    <section className={styles['services-section']}>
        <h2 className={styles['services-section__title']}>Чем мы можем вам помочь?</h2>
        <div className={styles['services-section__content']}>
           <ul className={styles['services-section__services-list']}>
            {services.map((service) => (
                <ServiceCard
                    key={service.number}
                    title={service.title}
                    number={service.number}
                    examples={service.examples}
                />
                ))}
           </ul>
        </div>
    </section>
  )
}
