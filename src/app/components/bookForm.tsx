'use client'

import { useState } from "react";

export default function BookForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    date: '',
    time: '',
    service: '',
    commercial: false,
    residential: false
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // console.log(formData);

    const response = await fetch('/api/book', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const data = response.json();
    // console.log(data);

    setFormData({
      name: '',
      email: '',
      address: '',
      date: '',
      time: '',
      service: '',
      commercial: false,
      residential: false
    })
  }

  const onInputChange = (event: any) => {
    // console.log(formData);

    if (event.target.name === "service") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        [event.target.id]: event.target.checked
      })
    }
    else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center mb-10 text-5xl text-white">
        <h2>Book Now!</h2>
      </div>
      <div className="mb-10">
        <label htmlFor="name" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Your name</label>
        <input type="text" id="name" name="name" value={formData.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onInputChange} required />
      </div>
      <div className="mb-10">
        <label htmlFor="email" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="email" name="email" value={formData.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onInputChange} required />
      </div>
      <div className="mb-10">
        <label htmlFor="address" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Your address</label>
        <input type="text" id="address" name="address" value={formData.address} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onInputChange} required />
      </div>
      <div className="mb-10">
        <label htmlFor="date" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Appointment Date</label>
        <input type="date" id="date" name="date" value={formData.date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onInputChange} required />
      </div>
      <div className="mb-10">
        <label htmlFor="time" className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Appointment Time</label>
        <input type="time" id="time" name="time" value={formData.time} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onInputChange} required />
      </div>
      <div className="mb-10 font-medium text-gray-900 dark:text-white">
        <p className="mb-2 text-2xl">Type of service</p>
        <div className="grid grid-cols-2 max-md:grid-cols-1 w-1/2 text-left">
          <div>
            <input type="radio" id="commercial" name="service" value="commercial" onChange={onInputChange} checked={formData.commercial} required />
            <label htmlFor="commercial" className="ml-4">Commercial</label>
          </div>
          <div>
            <input type="radio" id="residential" name="service" value="residential" onChange={onInputChange} checked={formData.residential} required />
            <label htmlFor="residential" className="ml-4">Residential</label>
          </div>
        </div>
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}