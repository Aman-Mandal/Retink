import React from 'react'
import {
  BsTwitter,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from 'react-icons/bs'

import logo from '../../Assets/Logo.png'

const Footer = () => {
  return (
    <section>
      <div className="bg-[#EBEBEB]">
        <div className="w-full px-28 py-20 flex justify-between items-center">
          <div className="space-y-6">
            <img src={logo} alt="logo" className="w-40 cursor-pointer" />
            <p className="font-semibold text-xl cursor-pointer">
              Product by Retink Media UG
            </p>
            <p className="font-semibold text-xl cursor-pointer">
              Bonn, Germany
            </p>
          </div>
          <div className="text-xl font-semibold uppercase">
            <ul className="space-y-3 cursor-pointer">
              <li>Get Early Access</li>
              <li>Provide Feedback</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold pb-4">Connect</p>
            <div className="flex space-x-6 text-xl cursor-pointer">
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
              <BsLinkedin />
              <BsYoutube />
              <BsPinterest />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#131313] text-white py-10">
        <div className="flex w-[85%] mx-auto justify-between">
          <p className="text-xl font-semibold">Copyright 2022 Retink</p>
          <ul className="flex space-x-6">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
