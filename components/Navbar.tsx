import { FC } from 'react';
import Navlinks from './Navlinks';
import Image from 'next/image';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="w-56 h-screen flex flex-col justify-between gap-y-4 bg-navbar px-2.5 py-4 text-white">
      <section className="flex flex-col gap-6">
        <div className="w-48 flex gap-x-3 self-center">
          <Image
            src="/logo.png"
            width={39}
            height={39}
            alt="logo"
            className="rounded"
          />
          <div className="w-[108px]">
            <p className="font-medium text-[15px]">Nishyan</p>
            <p className="underline underline-offset-4 text-[13px] text-white/80">
              Visit Store
            </p>
          </div>
          <svg
            className="self-center"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
              fill="white"
            />
          </svg>
        </div>
        <Navlinks />
      </section>
      <section className="w-48 bg-navbottom self-center rounded px-3 py-1.5 flex items-center gap-x-2.5">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="4" fill="white" fill-opacity="0.1" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.99995 9.79745C8.42319 9.79745 7.79995 10.3555 7.79995 11.2474V24.7474C7.79995 25.6394 8.42319 26.1974 8.99995 26.1974H27C27.5767 26.1974 28.2 25.6394 28.2 24.7474V21.8475H23C20.8737 21.8475 19.15 20.1237 19.15 17.9975C19.15 15.8712 20.8737 14.1475 23 14.1475H28.2V11.2474C28.2 10.3555 27.5767 9.79745 27 9.79745H8.99995ZM29.7999 14.1475V11.2474C29.7999 9.65417 28.6323 8.19745 27 8.19745H8.99995C7.36758 8.19745 6.19995 9.65417 6.19995 11.2474V24.7474C6.19995 26.3407 7.36758 27.7974 8.99995 27.7974H27C28.6323 27.7974 29.7999 26.3407 29.7999 24.7474V21.8475H29.85V14.1475H29.7999ZM22 17.9475C22 17.478 22.3806 17.0975 22.85 17.0975H24.15C24.6194 17.0975 25 17.478 25 17.9475C25 18.4169 24.6194 18.7975 24.15 18.7975H22.85C22.3806 18.7975 22 18.4169 22 17.9475ZM20.85 17.9975C20.85 16.81 21.8126 15.8475 23 15.8475H28.15V20.1475H23C21.8126 20.1475 20.85 19.1849 20.85 17.9975Z"
            fill="white"
          />
        </svg>
        <div className='w-48'>
          <p className='text-white/80 text-[13px]'>Available Credits</p>
          <p className='font-medium text-[16px]'>222.10</p>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
