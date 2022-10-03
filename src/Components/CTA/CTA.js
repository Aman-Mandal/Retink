import React from 'react'

const CTA = () => {
  return (
    <section className="w-[85%] my-20 mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-bold text-light-purple py-10">
        Sign Up for the BETA to See More
      </h2>

      <div className="flex gap-10 mb-8">
        <input
          className=" text-light-purple text-2xl border-2 placeholder:italic rounded-lg  text-center px-20 py-3  border-light-purple"
          type="text"
          placeholder="Enter Business Name"
        />
        <input
          className="text-light-purple text-2xl placeholder:italic border-2 rounded-lg text-center px-20 py-3  border-light-purple "
          type="email"
          placeholder="Enter Email Address"
        />
      </div>

      <button className="px-8 py-3 text-white text-2xl rounded-lg bg-light-purple mb-6 font-semibold hover:bg-[#4a0e98]">
        Notify Me
      </button>
      <button className="text-light-purple text-2xl rounded-lg px-8 py-3 border border-light-purple font-semibold hover:bg-light-purple hover:text-white">
        Sign Up as Freelance Partner
      </button>
    </section>
  )
}

export default CTA
