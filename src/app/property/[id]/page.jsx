import React from 'react'

const page = async ({ params }) => {
  const res = await fetch(
    `https://fsboafrica.com/api/properties/details/${params.id}`
  )

  const listing = await res.json()
  console.log(listing)
  return <div>{params.id}</div>
}

export default page
