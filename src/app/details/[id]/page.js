import React from 'react'
import { Carousel } from 'flowbite-react'
import { ModalComp } from '@/components/ModalComp'

const page = async ({ params }) => {


  const res = await fetch(
    `https://fsboafrica.com/api/properties/details/${params.id}`
  )
    .then((data) => {
      if (!data.ok) {
        throw new Error(`Failed to fetch latest properties: ${data.status}`)
      }
      return data.json()
    })
    .catch((error) => console.error(error))

  const results = res.data
  console.log(results)

  return (
    <>
      <div className="flex items-center grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {results.images.map((img) => {
            return <img key={img} src={img.filePath} alt="..." />
          })}
        </Carousel>

        <div className="grid grid-cols-2 gap-1">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {results.title}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {results.price}
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  {results.status}
                </span>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  {results.type}
                </span>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  {results.yearBuilt}
                </span>
              </li>
              <li className="flex">
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                  {results.description}
                </span>
              </li>
            </ul>
          </div>

          <ModalComp id={params.id}/>
        </div>
      </div>
    </>
  )
}

export default page
