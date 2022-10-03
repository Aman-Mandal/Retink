import React from 'react'
import videoImg from '../../Assets/videoImg.png'

const Video = () => {
  return (
    <section className="py-20 mb-10">
      <div className="flex items-center flex-col">
        <p className="text-light-purple font-bold uppercase text-2xl pb-10">
          Explainer Video
        </p>
        <img src={videoImg} />
      </div>
    </section>
  )
}

export default Video
