import clsx from 'clsx'
import Image from 'next/image'

interface ShoeCardProps {
  imgURL: any
  changeBigShoeImage: any
  bigShoeImage: string
}
const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div
      onClick={handleClick}
      className={clsx('border-2 rounded-xl cursor-pointer max-sm:flex-1', {
        'border-orange-500': bigShoeImage === imgURL.bigShoe,
      })}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          quality={100}
          className='relative object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
