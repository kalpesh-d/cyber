import Cyber from '../assets/Cyber.svg';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  return (
    <nav className='container mx-auto py-3 flex justify-between md:justify-around items-center px-3'>
      <img src={Cyber} className="h-5" alt="Cyber" />

      <div className='flex items-center gap-x-2 border hidden lg:flex bg-stone-200 p-2 rounded-md'>
        <MagnifyingGlassIcon className='size-4 text-gray-600' />
        <input type="text" placeholder='Search' className='bg-stone-200 text-sm w-80 active:ou tline-0' />
      </div>

      <button className='block md:hidden'>
        <Bars3Icon className="size-6 text-slate-950" />
      </button>

      <div className='gap-x-24 hidden md:flex cursor-pointer'>
        <ul className='flex items-center font-semibold gap-x-14 text-xs '>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>

        <section className='flex gap-x-10 items-center'>
          <HeartIcon className='size-6 text-slate-950' />
          <ShoppingCartIcon className='size-6 text-slate-950' />
          <UserIcon className='size-6 text-slate-950' />
        </section>
      </div>
    </nav>
  )
}

export default NavBar