import React from 'react'
import logo from '../../Assets/Logo.png'
import headerImg from '../../Assets/headerImg.png'

const Header = () => {
  return (
    <header className=" w-full  bg-neutral-100">
      <div className="flex w-[85%] mx-auto py-16">
        <div className="flex-[0.55]">
          <img className="h-8 mb-16" src={logo} alt="logo" />
          <h2 className="text-[#333232] font-sans text-5xl leading-[1.4] font-bold mb-8">
            Get Advanced AI <br />+ Expert Created
            <span className="text-light-purple"> Logos</span>
          </h2>

          <p className="text-xl mb-8 leading-[1.5]">
            Boost your sales
            <span className="text-light-purple font-bold"> 10x faster </span>
            with content customized by our <br />
            unique partnership of
            <span className="text-light-purple font-bold px-1">
              human creativity and AI optimiztion
            </span>
          </p>

          <h3 className="text-light-purple text-2xl font-bold mb-8">
            Sign Up for the BETA!
          </h3>
          <div className="text-sm mb-8 ">
            <input
              type="text"
              placeholder="Business Name"
              className="w-28 text-light-purple text-center underline bg-inherit outline-none placeholder:text-light-purple"
            />
            would like a beta invite sent to
            <input
              type="email"
              placeholder="Email Address"
              className="text-center bg-inherit text-light-purple w-28 placeholder:text-light-purple underline outline-none "
            />
            when it's ready!
          </div>

          <div className="flex gap-20">
            <button className="bg-light-purple px-10 py-2 rounded-lg text-white font-semibold hover:bg-[#4a0e98]">
              Notify Me
            </button>
            <button className="border-light-purple border px-10 py-2 rounded-lg text-light-purple font-semibold hover:bg-light-purple hover:text-white">
              Sign up as a Freelance partner
            </button>
          </div>
        </div>
        <div className="flex-[0.45]">
          <img className="scale-110" alt="header-img" src={headerImg} />
        </div>
      </div>
    </header>
  )
}

export default Header
