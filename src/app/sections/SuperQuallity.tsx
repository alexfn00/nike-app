import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const SuperQuallity = () => {
  return (
    <section
      id='about-us'
      className='flex justify-center items-center max-lg:flex-col gap-10 w-full
  '>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-semibold capitalize text-4xl lg:max-w-lg'>
          We Provide You
          <span className='text-orange-500'> Super </span>
          <span className='text-orange-500'>Quality </span>
          Shoes
        </h2>
        <p className='mt-4 font-sans text-gray-500 text-lg leading-8 sm:max-w-sm'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className='mt-6 font-sans text-gray-500 text-lg leading-8 sm:max-w-sm'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className='mt-11'>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5 bg-orange-600 px-7 py-4 text-lg rounded-lg',
              variant: 'destructive',
            })}
            href='/'
            target='_blank'>
            View Details
          </Link>
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <Image
          src='/shoe8.svg'
          alt='shoe8'
          width={570}
          height={522}
          quality={100}
          className='relative object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuallity
