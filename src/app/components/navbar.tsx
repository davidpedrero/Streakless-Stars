"use client";

import Image from "next/image";
import Link from "next/link";
import logo from '../../../public/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import { usePathname } from 'next/navigation';


export default function Navbar() {

  const currentRoute = usePathname();

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-screen sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-4xl max-lg:text-3xl">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
            />
          </a>
          <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <FaUserCircle className="fill-white" size={40} />
            </button>
            {/* Dropdown menu */}
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className={`block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${currentRoute === '/' ? "md:text-blue-700 md:dark:text-blue-500" : "dark:text-white"}`} aria-current="page">Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${currentRoute === '/about' ? "md:text-blue-700 md:dark:text-blue-500" : "dark:text-white"}`}>About</Link>
              </li>
              <li>
                <Link href="/pricing" className={`block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${currentRoute === '/pricing' ? "md:text-blue-700 md:dark:text-blue-500" : "dark:text-white"}`}>Pricing</Link>
              </li>
              <li>
                <Link href="/book" className={`block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${currentRoute === '/book' ? "md:text-blue-700 md:dark:text-blue-500" : "dark:text-white"}`}>Book</Link>
              </li>
              <li>
                <Link href="/contact" className={`block py-2 pl-3 pr-4 rounded text-white bg-blue-700 md:bg-transparent md:p-0 md:hover:text-blue-700 md:dark:hover:text-blue-500 ${currentRoute === '/contact' ? "md:text-blue-700 md:dark:text-blue-500" : "dark:text-white"}`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
    </>
  )
}