import { Star } from 'lucide-react'
import Image from 'next/image'

interface PopularProductProps {
  imgUrl: string
  name: string
  price: string
}

const PopularProductCard = ({ imgUrl, name, price }: PopularProductProps) => {
  console.log('imgUrl', imgUrl)
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image
        src={imgUrl}
        alt={name}
        width={280}
        height={280}
        quality={100}
        className='relative object-contain'
      />
      <div className='mt-8 flex justify-start gap-2.5'>
        <Star className='ml-2 h-6 w-6 rounded-full text-orange-600' />
        <p className='text-xl leading-normal text-gray-500'>(4.5)</p>
      </div>
      <h3 className='mt-2 text-xl leading-normal font-semibold'>{name}</h3>
      <p className='mt-2 text-xl leading-normal text-orange-600'>{price}</p>
    </div>
  )
}

export default PopularProductCard
