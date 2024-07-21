import Latest from '@/components/Latest'
import React from 'react'

import RentComponent from '@/components/RentComponent'
import SaleComponent from '@/components/SaleComponent'
import error from './error'

const Home = async ({ searchParams }) => {
  const search = searchParams.search || 'latest' || 'for-sale' || 'to-rent'

  const latest = await fetch(
    `https://fsboafrica.com/api/properties/${
      search === 'for-sale'
        ? `for-sale?search=for-sale`
        : search === 'to-rent'
        ? `to-rent?search=to-rent`
        : search === 'latest'
        ? 'latest'
        : null
    }`
  )
    .then((data) => {
      if (!data.ok) {
        throw new Error(`Failed to fetch latest properties: ${data.status}`)
      }
      return data.json()
    })
    .catch((error) => console.error(error))


  const results = latest.data

  return (
    <div>
      {search === 'latest' ? (
        Object.values(results).map((val) => (
          <div key={val}>
            <SaleComponent results={val} />
            <RentComponent results={val} />
          </div>
        ))
      ) : (
        <Latest results={results} />
      )}
    </div>
  )
}

export default Home
