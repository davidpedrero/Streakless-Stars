"use client";

import Image from "next/image";
import logo from '../../../public/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (

    <footer className="bg-white shadow dark:bg-gray-900 w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">FAQ</a>
            </li>
            <li className="align-middle">
              <a href="#" className="mr-2 hover:underline md:mr-4 flex align-middle"><FaFacebook /></a>
            </li>
            <li>
              <a href="#" className="mr-2 hover:underline md:mr-4 flex align-middle"><FaInstagram /></a>
            </li>
            <li>
              <a href="#" className="mr-2 hover:underline md:mr-4 flex align-middle"><FaTwitter /></a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Streakless Stars™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}