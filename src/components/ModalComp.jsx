'use client'
import { useState } from 'react'

export function ModalComp({ id }) {
  const [enquiry, setEnquiry] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dialingCode: '',
    phoneNumber: '',
    message: '',
    listingId: 0,
    ownedBy: '',
  })

  const handleChange = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const enquire = { ...enquiry, listingId: id }
    console.log(enquire)

    if (!enquire) {
      return
    }

    await fetch('https://fsboafrica.com/api/enquiries/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquire),
    })
      .then((data) => console.log('success', data))
      .catch((error) => console.error(error))
  }

  return (
    <htmlForm className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          First Name
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="text"
          id="firstName"
          placeholder="firstName"
          value={enquiry.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          last Name
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="text"
          id="lastName"
          placeholder="lastName"
          value={enquiry.lastName}
          onChange={handleChange}
          name="lastName"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="email"
          id="email"
          placeholder="name@company.com"
          value={enquiry.email}
          onChange={handleChange}
          name="email"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="dialingCode"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Dialing Code
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="text"
          id="dialingCode"
          placeholder="dialingCode"
          value={enquiry.dialingCode}
          onChange={handleChange}
          name="dialingCode"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="Phone Number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Phone Number
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="text"
          id="phoneNumber"
          placeholder="phoneNumber"
          value={enquiry.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
          type="text"
          value={enquiry.message}
          onChange={handleChange}
          name="message"
        ></textarea>
      </div>

      <div className="mb-5">
        <label
          htmlFor="OwnedBy"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          OwnedBy
        </label>
        <input
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          type="text"
          id="ownedBy"
          placeholder="ownedBy"
          value={enquiry.ownedBy}
          onChange={handleChange}
          name="ownedBy"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Post Enquiry
      </button>
    </htmlForm>
  )
}
