import { Star } from 'lucide-react'
import Image from 'next/image'
interface ReviewCardProps {
  imgURL: string
  customerName: string
  rating: number
  feedback: string
}
const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
}: ReviewCardProps) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Image
        src={imgURL}
        alt='customer'
        width={120}
        height={120}
        quality={100}
        className=' rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-4 max-w-sm text-center text-gray-500'>{feedback}</p>
      <div className='mt-3 flex justify-center gap-2.5'>
        <Star className='ml-2 h-6 w-6 rounded-full text-orange-600' />
        <p className='text-xl text-gray-500'>({rating})</p>
      </div>
      <h3 className='mt-1 text-3xl text-center font-semibold'>
        {customerName}
      </h3>
    </div>
  )
}

export default ReviewCard
