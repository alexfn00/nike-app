import { ArrowRight } from 'lucide-react'

import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import MobileNav from './MobileNav'
import { navLinks } from '@/constants'

const Navbar = async () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            <Image src='/header-logo.svg' width={129} height={29} alt='Logo' />
          </Link>

          <MobileNav />

          <div className='hidden items-center space-x-16 sm:flex'>
            {navLinks.map((item) => (
              <Link
                key={item.label}
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}
                href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
