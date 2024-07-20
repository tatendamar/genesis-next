import Latest from '@/components/Latest'
import React from 'react'
import { metadata } from './layout'
import RentComponent from '@/components/RentComponent'
import SaleComponent from '@/components/SaleComponent'
import { Metadata } from 'next'


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
  const data = await latest.json()

  if (!latest.ok) {
    throw new Error(`Failed to fetch latest properties: ${latest.status}`)
  }

  const results = data.data
  console.log(results)
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
