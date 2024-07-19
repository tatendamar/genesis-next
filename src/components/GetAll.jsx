import React from 'react'

const GetAll = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h1>{result.title}</h1>
            <p>{result.description}</p>
            {/* <img src={result.image} alt={result.title} /> */}
          </div>
        )
      })}
    </div>
  )
}

export default GetAll
