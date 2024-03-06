import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { footerLinks, socialMedia } from '@/constants'
import { buttonVariants } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Link href='/'>
            <Image
              src='/footer-logo.svg'
              alt='logo'
              width={150}
              height={46}
              quality={100}
              className=''
            />
          </Link>
          <p className='mt-6 text-base text-white/70 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8 '>
            {socialMedia.map((item) => (
              <div
                key={item.alt}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={24}
                  height={24}
                  quality={100}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white text-2xl'>{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className='mt-4 text-white text-base hover:text-gray-300 cursor-pointer'>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-10 max-sm:flex-col max-sm:items-center flex-row'>
        <div className='flex flex-1 justify-start items-center gap-2 text-white cursor-pointer'>
          <Image
            src='/copyright-sign.svg'
            alt='copy right sign'
            width={20}
            height={20}
            quality={100}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p className='cursor-pointer text-white'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer
