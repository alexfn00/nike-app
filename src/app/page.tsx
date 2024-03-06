import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuallity,
} from './sections'
import Footer from './sections/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <section className='sm:px-16 px-8 sm:pr-16 pr-8 sm:pb-24 pb-12'>
        <Hero />
      </section>
      <section className='sm:px-16 px-8 sm:py-24 py-12'>
        <PopularProducts />
      </section>
      <section className='sm:px-16 px-8 sm:py-24 py-12'>
        <SuperQuallity />
      </section>
      <section className='sm:px-16 px-8 py-10'>
        <Services />
      </section>
      <section className='sm:px-16 px-8 py-10'>
        <SpecialOffer />
      </section>
      <section className='sm:px-16 px-8 py-10 bg-indigo-50'>
        <CustomerReviews />
      </section>
      <section className='sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8 border-2'>
        <Footer />
      </section>
    </main>
  )
}
