import React from 'react'
import ImageComponent from './ImageComponent'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import { AiTwotoneMail } from 'react-icons/ai'
import { Divider } from 'primereact/divider'
import Link from 'next/link'

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/details/${result.id}`}>
        {/* {result.images &&
        result.images.map((image) => <ImageComponent image={image} />)} */}
        <img src={result.images[0].filePath} />
        <div className="">
          <p className="line-clamp-2 text-md">{result.title}</p>
          <p>{result.address}</p>

          <div>
            <p className="text-xs text-gray-500">Beds: {result.bedrooms}</p>
            <Divider className="my-2" />
            <p className="text-xs text-gray-500">Baths: {result.bathrooms}</p>
            <Divider className="my-2" />
            <p className="text-xs text-gray-500">Type: {result.type}</p>
            <Divider className="my-2" />
            <p className="text-xs text-gray-500">Status: {result.status}</p>
            <Divider className="my-2" />
            <p className="text-xs text-gray-500">SQM: {result.propertySize}</p>
          </div>
          <p className="flex items-center pt-2 pr-1">
            <AiOutlineWhatsApp className="h-5 mr-1 ml-3" />
            <FiPhoneCall className="h-5 mr-1 ml-3" />
            <AiTwotoneMail className="h-5 mr-1 ml-3" />
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Card
