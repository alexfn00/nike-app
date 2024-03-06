'use client'

import { ArrowRight, Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggoeOpen = () => setOpen((prev) => !prev)

  return (
    <div className='sm:hidden'>
      <Menu
        onClick={toggoeOpen}
        className='relative z-50 w-7 h-7 text-zinc-700'
      />

      {isOpen && (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  onClick={() => {
                    toggoeOpen()
                  }}
                  href={item.href}
                  className='font-monts errat leading-normal text-lg text-gray-500'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNav
