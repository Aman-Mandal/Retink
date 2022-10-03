import React from 'react'
import Card from '../Card/Card'
import uploadImg from '../../Assets/Group.png'
import aiImg from '../../Assets/AI.png'
import recieveImg from '../../Assets/recieveReview.png'
import info from '../../Assets/info.png'
import monitorContentImg from '../../Assets/monitorContent.png'

const data1 = [
  {
    name: 'Make AI-assisted Content Choices',
    img: aiImg,
    feature:
      'Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.',
  },
  {
    name: 'Upload and Maintain your Brand Identity',
    img: uploadImg,
    feature:
      'Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!',
  },
  {
    name: 'Be informed as we create',
    img: info,
    feature:
      'Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.',
  },
]

const data2 = [
  {
    name: 'Receive and Review',
    img: recieveImg,
    feature:
      'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.',
  },
  {
    name: 'Publish and Monitor your contents’ progress',
    img: monitorContentImg,
    feature:
      'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.',
  },
]

const Features = () => {
  return (
    <section className="px-20 flex flex-col gap-10 items-center">
      <div className="flex gap-10">
        {data1.map(data => (
          <Card
            key={data.name}
            feature={data.feature}
            name={data.name}
            img={data.img}
          />
        ))}
      </div>
      <div className="flex gap-10">
        {data2.map(data => (
          <Card
            key={data.name}
            feature={data.feature}
            name={data.name}
            img={data.img}
          />
        ))}
      </div>

      <div className="text-center w-3/5 my-20">
        <h2 className="text-light-purple text-3xl font-semibold pb-7">
          Transform Your Creation Process
        </h2>
        <p className="text-xl pb-20">
          With a new approach toordering content, you can now stop juggling
          multiple documents and meetings and start publishing content faster
          and on demand
        </p>

        <h2 className="text-light-purple text-3xl font-semibold pb-7">
          Activate Your Business Growth With RetinkContent
        </h2>
        <p className="text-xl">
          Save time and maintain your brand identity within your budget range or
          sign up for affordable plans and still access multiple content
          services like:
        </p>
      </div>
    </section>
  )
}

export default Features
