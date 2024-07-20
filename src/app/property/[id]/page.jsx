import React from 'react'

export const metadata = {
  title: 'Genesis Next Project',
  description: 'Genesis Next Project',
}

const page = async ({ params }) => {
  const res = await fetch(
    `https://fsboafrica.com/api/properties/details/${params.id}`
  )
    .then((data) => console.log(data))
    .catch((error) => console.error(error))

  console.log(listing)
  return <div>{params.id}</div>
}

export default page
