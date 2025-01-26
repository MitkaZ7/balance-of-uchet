import React from 'react'
import { Service } from 'app/types/service';
import styles from './ServiceCard.module.scss'

type ServiceCardProps = Service; 

export const ServiceCard = ({ title, number, examples }:ServiceCardProps) => {
  return (
    <div className={styles['service-card']}>
        {/* <div className={styles['service-card__header']}> */}
            <p className={styles['service-card__num']}>{number}</p>
            <h3 className={styles['service-card__title']}>{title}</h3>
        {/* </div> */}
        <ul className={styles['service-card__specs-list']}>
        {
            examples.length > 0 && 
            ( 
                examples.map((example, index) => <li key={index} className={styles['service-card__spec-item']}>{example}</li>)
            ) 
        }
        </ul>
    </div>
  )
}
