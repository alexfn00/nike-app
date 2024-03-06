import Image from 'next/image'

interface ServiceCardProps {
  imgURL: string
  label: string
  subtext: string
}

const ServiceCard = ({ imgURL, label, subtext }: ServiceCardProps) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-2xl px-10 py-16'>
      <div className='w-11 h-11 justify-center items-center bg-orange-500 rounded-full'>
        <Image
          src={imgURL}
          alt={label}
          width={24}
          height={24}
          quality={100}
          className='relative object-contain'
        />
      </div>
      <h3 className='mt-5 font-semibold text-3xl leading-normal'>{label}</h3>
      <p className='mt-3 break-words leading-normal text-lg text-gray-500'>
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard
