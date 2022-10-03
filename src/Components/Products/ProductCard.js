import React from 'react'

const ProductCard = ({ img, name, feature }) => {
  return (
    <div className="w-[22rem]">
      <img src={img} className="rounded-2xl h-56 mb-4" />
      <div className="px-3">
        <h2 className="font-semibold text-xl">{name}</h2>
        <div className="h-1 w-28 rounded-full bg-light-purple mb-6 "></div>
        <p className="w-fit">{feature}</p>
      </div>
    </div>
  )
}

export default ProductCard
