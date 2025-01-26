import servicesData from '../../data/services.json'
import { ServicesData } from 'app/types/service';
import { ServiceCard } from '@components/ServiceCard/ServiceCard';
import { BenefitsSummary } from '@components/BenefitsSummary/BenefitsSummary';
import styles from './Services.module.scss';
import { WithAnimation } from 'app/utils/withAnimation';
export const Services = () => {

    const { services } = servicesData as ServicesData;

    

  return (
    <section className={styles['services-section']}>
        <WithAnimation>
          <h2 className={styles['services-section__title']}>Чем мы можем вам помочь?</h2>
        </WithAnimation>
        <div className={styles['services-section__content']}>
           <ul className={styles['services-section__services-list']}>
           {services.map((service, index) => (
            <WithAnimation key={service.number} index={index} animationClass="fade-in" delay={300}>
              <ServiceCard
                title={service.title}
                number={service.number}
                examples={service.examples}
              />
            </WithAnimation>
          ))}
            <WithAnimation animationClass="fade-in" delay={200} index={services.length}>
              <div className={styles['services-section__benefits-wrapper']}>
                <BenefitsSummary/>
              </div>
              </WithAnimation> 
              
           </ul>
           
        </div>
    </section>
  )
}
