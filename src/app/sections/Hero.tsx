'use client'
import { buttonVariants } from '@/components/ui/button'
import { shoes, statistics } from '@/constants'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import ShoeCard from '@/components/ShoeCard'

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState('/big-shoe1.png')
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full pt-28'>
        <p className='text-lg font-mono text-primary'>Our Summer Collections</p>
        <h1 className='mt-10 font-semibold text-8xl max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The new Arrival
          </span>
          <br />
          <span className=' text-primary inline-block mt-3'>Nike</span>
          Shoes
        </h1>
        <p className=' font-sans text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5 bg-orange-600 rounded-full px-7 py-4 text-lg',
            variant: 'destructive',
          })}
          href='/'
          target='_blank'>
          Shop now
          <ArrowRight className='ml-2 h-5 w-5 bg-white rounded-full text-orange-600' />
        </Link>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((item) => (
            <div key={item.label}>
              <p className='text-4xl font-semibold'>{item.value}</p>
              <p className='leading-7 text-gray-500'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary/5'>
        <Image
          src={bigShoeImage}
          alt='shoe collection'
          width={610}
          height={502}
          quality={100}
          className='relative object-contain'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe: any) => {
                  setBigShoeImage(shoe)
                }}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
