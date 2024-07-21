'use client'
import React from 'react'
import Card from './Card'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Latest = ({ results }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 w-3/4 m-auto">
      <div className="mt-20 gap-6">
        <Slider {...settings}>
          {results.map((result) => {
            return <Card key={result.id} result={result} />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Latest
