import ReviewCard from '@/components/ReviewCard'
import { reviews } from '@/constants'
import React from 'react'

const CustomerReviews = () => {
  return (
    <section className=''>
      <h3 className='font-semibold text-center text-4xl'>
        What Our <span className=' text-orange-500'>Customers</span> Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center text-gray-500'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
