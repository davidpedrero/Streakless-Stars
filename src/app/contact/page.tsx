import Image from "next/image";
import contact from '../../../public/contact.png';
import ContactForm from "../components/contactForm";
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';

export default function Contact() {
  return (
    <>
      <div className='bg-blue-200 flex align-middle justify-center'>
        <div className='text-center w-1/2 text-blue-950'>
          <h2 className='p-8 text-5xl'>Contact Us</h2>
          <div className="text-3xl text-left mt-8 mb-8">
            <h4 className="mb-4"><MdOutlineLocationOn className="inline mr-4" /> 1405 71st 14th ave, Brooklyn, NY 11228</h4>
            <h4 className="mb-4"><FiPhoneCall className="inline mr-4" /> 347-622-3789</h4>
            <h4 className="mb-4"><MdOutlineEmail className="inline mr-4" /> hello@streaklessStars.com</h4>
            <h4><AiOutlineClockCircle className="inline mr-4" /> Mon - Fri: 9:00 AM - 6:00 PM</h4>
          </div>
          <div className="relative h-[35vw] mb-12">
            <Image className="mb-8"
              src={contact}
              alt="Contact Pic"
              fill={true}
              sizes="50vw"
              priority={true}
            />
          </div>
          <div className="flex text-left mb-8 text-xl">
            <p className="w-1/2 mr-8">
              Looking to make your windows sparkle? You’re in the right place! Streakless Stars is dedicated to providing you with a fantastic experience and spotless windows. If you’re interested in our services but need more information, don’t hesitate! Simply fill out our online form with your queries, and we’ll get back to you with all the details you need. You can ask us about our window cleaning or exterior maintenance services, scheduling, pricing, or anything else you’re curious about. We’re here to help and can’t wait to bring a shine to your home!
            </p>
            <div className="bg-gray-900 p-8 text-left rounded-xl w-1/2 h-fit">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}