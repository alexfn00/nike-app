import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const SpecialOffer = () => {
  return (
    <section className='flex items-center max-xl:flex-col-reverse justify-wrap'>
      <div className='flex-1 mt-8'>
        <Image
          src='/offer.svg'
          alt='Shoe Promotion'
          width={773}
          height={687}
          quality={100}
          className='relative object-contain'
        />
      </div>
      <div className='flex flex-1 flex-col gap-10'>
        <h2 className='font-semibold capitalize text-4xl lg:max-w-lg'>
          <span className='text-orange-500'> Special </span>
          Offer
        </h2>
        <p className='mt-4 font-sans text-gray-500 text-lg leading-8 sm:max-w-sm'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className='mt-6 font-sans text-gray-500 text-lg leading-8 sm:max-w-sm'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5 bg-orange-600 px-7 py-4 text-lg rounded-lg',
              variant: 'destructive',
            })}
            href='/'
            target='_blank'>
            View details
          </Link>
          <Link
            className={buttonVariants({
              size: 'lg',
              className:
                'mt-5 bg-white text-gray-600 ring-2 ring-gray-300 px-7 py-4 text-lg rounded-2xl',
              variant: 'destructive',
            })}
            href='/'
            target='_blank'>
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
