import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Subscribe = () => {
  return (
    <section
      className='flex justify-between items-center max-lg:flex-col gap-10'
      id='contact-us'>
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-semibold'>
        Sign up from
        <span className='text-orange-500'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-gray-500 rounded-full'>
        <input
          type='text'
          placeholder='subscribe@nike.com'
          className='sm:flex-1 max-sm:w-full text-base leading-normal text-gray-500 pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Link
            className={buttonVariants({
              className: 'rounded-full',
              size: 'lg',
              variant: 'destructive',
            })}
            href='/'
            target='_blank'>
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
