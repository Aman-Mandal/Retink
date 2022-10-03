import React from 'react'

const Card = ({ name, feature, img }) => {
  return (
    <div className="w-[23rem] mx-auto p-8 shadow-xl hover:shadow-2xl rounded-2xl hover:scale-105 hover:border hover:border-light-purple  hover:text-light-purple transition-all ease-out">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <img src={img} className="w-20 my-8 mx-auto" />
        </div>
        <h2 className="font-bold text-2xl w-4/5 text-center mb-4">{name}</h2>
        <p className="px-2 font-semibold">{feature}</p>
      </div>
    </div>
  )
}

export default Card
