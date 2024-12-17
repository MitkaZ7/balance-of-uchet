import React from 'react'
import { Service } from 'app/types/service';

type ServiceCardProps = Service; 

export const ServiceCard = ({ title, number, examples }:ServiceCardProps) => {
  return (
    <div>
        <p className="service-card-num">{number}</p>
        <h3 className="service-card-title">{title}</h3>
        <ul className="service-card_descriprion-list">
        {
            examples.length > 0 && 
            ( 
                examples.map((example, index) => <li key={index}>{example}</li>)
            ) 
        }
        </ul>
    </div>
  )
}
