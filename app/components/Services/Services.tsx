import servicesData from '../../data/services.json'
import { ServicesData } from 'app/types/service';
import { ServiceCard } from '@components/ServiceCard/ServiceCard';

export const Services = () => {

    const { services } = servicesData as ServicesData;

    

  return (
    <section>
        <h2>Чем мы можем вам помочь?</h2>
        <div>
           <ul>
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
