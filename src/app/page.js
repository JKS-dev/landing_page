'use client'

import Image from "next/image";
import Link from 'next/link';
import { Button, Alert, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Carousel, card } from 'flowbite-react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase/config';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';


export default function Home() {
  // const [user] = useAuthState(auth);
  // const router = useRouter()
  // const userSession = sessionStorage.getItem('user');

  // console.log({user})

  // if (!user && !userSession){
  //   router.push('/sign-in')
  // }

  return (
    <div className="app">
      {/* <button onClick={() => {
        signOut(auth)
        sessionStorage.removeItem('user')
        }}>
        Log out
      </button> */}
      {/* <Alert color="failure">Hellow World</Alert> */}
      <Navbar fluid rounded className="shadow-xl">
        <NavbarBrand href="/">
          <img src="/icon.svg" className="mr-3 h-2 sm:h-9" alt="Home" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DelSuvidha</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button color="info" href="/sign-in">
            <HiUserCircle className="mr-3 h-4 w-4" />
            Login
          </Button>

        </div>

      </Navbar>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
    </div>
  );
}
