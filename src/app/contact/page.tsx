import Image from "next/image";
import contact from '../../../public/contact.png';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <>
      <div className='bg-blue-200 flex align-middle justify-center'>
        <div className='text-center w-1/2 text-blue-950'>
          <h2 className='p-8 text-5xl'>Contact Us</h2>
          <div className="flex text-left mb-8 text-xl">
            <p>
              Looking to make your windows sparkle? You’re in the right place! Streakless Stars is dedicated to providing you with a fantastic experience and spotless windows. If you’re interested in our services but need more information, don’t hesitate! Simply fill out our online form with your queries, and we’ll get back to you with all the details you need. You can ask us about our window cleaning or exterior maintenance services, scheduling, pricing, or anything else you’re curious about. We’re here to help and can’t wait to bring a shine to your home!
            </p>
            <form className="ml-8">
              <label htmlFor="name">Your name</label>
              <input id="name" className="mb-4" />
              <label htmlFor="email">Your email</label>
              <input id="enail" className="mb-4" />
              <label htmlFor="message">Your message (optional)</label>
              <textarea id="message" rows={5} />
              <input type="submit" className="bg-blue-600 text-white p-2 rounded-md mt-4 cursor-pointer" />
            </form>
          </div>
          <Image
            src={contact}
            alt="Contact Pic"
          />
          <div className="text-2xl text-left mt-8 mb-8">
            <h4 className="mb-4"><MdOutlineLocationOn className="inline mr-4" /> 1405 71st 14th ave, Brooklyn, NY 11228</h4>
            <h4 className="mb-4"><FiPhoneCall className="inline mr-4" /> 347-622-3789</h4>
            <h4 className="mb-4"><MdOutlineEmail className="inline mr-4" /> hello@streaklessStars.com</h4>
            <h4 className="mb-4"><AiOutlineClockCircle className="inline mr-4" /> Mon - Fri: 9:00 AM - 6:00 PM</h4>
          </div>
        </div>
      </div>
    </>
  )
}