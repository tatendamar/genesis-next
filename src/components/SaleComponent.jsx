'use client'
import React from 'react'
import Card from './Card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SaleComponent = ({ results }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {results.map((result) => {
              return <Card key={result.id} result={result} />
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SaleComponent

// return (
//   <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
//     {results.map((result) => {
//       return <Card key={result.id} result={result} />
//     })}
//   </div>
// )
