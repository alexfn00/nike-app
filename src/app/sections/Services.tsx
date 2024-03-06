import ServiceCard from '@/components/ServiceCard'
import { services } from '@/constants'
import React from 'react'

const Services = () => {
  return (
    <section className='flex justify-center flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard
          key={service.label}
          imgURL={service.imgURL}
          label={service.label}
          subtext={service.subtext}
        />
      ))}
    </section>
  )
}

export default Services
