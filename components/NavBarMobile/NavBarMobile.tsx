'use client';

import { SITECONFIG } from '@/config/site';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
export const NavBarMobile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const dropDownShownHandler = () => {
    setShowDropdown(true);
  };
  const dropDownDisableHandler = (
    e: MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => {
    e.stopPropagation();
    setShowDropdown(false);
  };
  return (
    <div className='block lg:hidden' onClick={dropDownShownHandler}>
      {/* <p className='text-white'>Burger</p> */}
      {<Icons.burger size={35} className='text-brand' />}
      <div
        className={`fixed inset-0 h-[350px] w-screen rounded-bl-md rounded-br-md bg-header transition   ${
          showDropdown ? 'block transition delay-100 animate-in' : 'hidden'
        }`}
      >
        <div
          className={`absolute right-2 top-2 cursor-pointer`}
          onClick={(e) => dropDownDisableHandler(e)}
        >
          {<Icons.cancel size={35} className='text-brand' />}
        </div>
        <div className='items-left mt-3 flex flex-col justify-center '>
          <div className='ml-3'>
            <Image
              width={56}
              height={20}
              src={'/dxgLogo.svg'}
              alt='Digital Xperience Group'
            />
          </div>
          <div className='items-left mt-2 flex flex-col justify-center'>
            {SITECONFIG.mainNav.map((item, index) => {
              return (
                <Link
                  onClick={(e) => dropDownDisableHandler(e)}
                  key={index}
                  href={item.slug}
                >
                  <Button
                    className={`text-base font-semibold text-white hover:text-brand active:text-brand ${
                      pathname === item.slug ? 'text-brand' : ''
                    }`}
                    variant='link'
                  >
                    {item.title}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
