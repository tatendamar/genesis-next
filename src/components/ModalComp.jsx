'use client'

import { Button, Label, Modal } from 'flowbite-react'
import { useState } from 'react'

export function ModalComp() {
  const [openModal, setOpenModal] = useState(false)

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

  function onCloseModal() {
    setOpenModal(false)
  }

  const handleChange = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let id = 0

    const newId = (id += 1)
    const newUser = { ...enquiry, listingId: newId }
    console.log(newUser)

    if (!newUser) {
      return
    }

    await fetch('https://fsboafrica.com/api/enquiries/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((data) => console.log('success', data))
      .catch((error) => console.error(error))
  }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add</Button>
      <form>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="Your firstName" />
                </div>
                <input
                  type="text"
                  id="firstName"
                  placeholder="firstName"
                  value={enquiry.firstName}
                  onChange={handleChange}
                  name="firstName"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Your lastName" />
                </div>
                <input
                  type="text"
                  id="lastName"
                  placeholder="lastName"
                  value={enquiry.lastName}
                  onChange={handleChange}
                  name="lastName"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <input
                  type="text"
                  id="email"
                  placeholder="name@company.com"
                  value={enquiry.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dialingCode" value="Your dialingCode" />
                </div>
                <input
                  type="text"
                  id="dialingCode"
                  placeholder="dialingCode"
                  value={enquiry.dialingCode}
                  onChange={handleChange}
                  name="dialingCode"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phoneNumber" value="Your phoneNumber" />
                </div>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="phoneNumber"
                  value={enquiry.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Your message" />
                </div>
                <input
                  type="text"
                  id="message"
                  placeholder="message"
                  value={enquiry.message}
                  onChange={handleChange}
                  name="message"
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="ownedBy" value="Your ownedBy" />
                </div>
                <input
                  type="text"
                  id="ownedBy"
                  placeholder="ownedBy"
                  value={enquiry.ownedBy}
                  onChange={handleChange}
                  name="ownedBy"
                />
              </div>

              <div className="w-full">
                <Button type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </form>
    </>
  )
}
