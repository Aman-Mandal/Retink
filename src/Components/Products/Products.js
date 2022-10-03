import React from 'react'
import ProductCard from './ProductCard'
import unsplash1 from '../../Assets/unsplash1.jpg'
import unsplash2 from '../../Assets/unsplash2.jpg'
import unsplash3 from '../../Assets/unsplash3.jpg'
import unsplash4 from '../../Assets/unsplash4.jpg'
import unsplash5 from '../../Assets/unsplash5.jpg'
import unsplash6 from '../../Assets/unsplash6.jpg'

const data1 = [
  {
    name: 'Logos',
    feature:
      'Have a unique & creative logo designed to express and represent your brand identity.',
    img: unsplash1,
  },
  {
    name: 'Blog Writing',
    feature:
      'Write SEO enriched blog posts as long or short articles on any topic of your choice.',
    img: unsplash2,
  },
  {
    name: 'Animated Videos',
    feature:
      'Bring animated characters to life to keep your viewers engaged and entertained.',
    img: unsplash3,
  },
]

const data2 = [
  {
    name: 'Product Demo',
    feature:
      'Introduce your product to potential customers in a clear and creative video.',
    img: unsplash4,
  },

  {
    name: 'Copywriting',
    feature:
      'Have creative and compelling copies written to boost your product, brand, service or company.',
    img: unsplash5,
  },
  {
    name: 'Social Media Ads',
    feature: 'Boost sales and awareness with tailor made ads from experts.',
    img: unsplash6,
  },
]

const Products = () => {
  return (
    <section className="w-[85%] mx-auto my-10">
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-evenly">
          {data1.map(data => (
            <ProductCard
              key={data.name}
              name={data.name}
              feature={data.feature}
              img={data.img}
            />
          ))}
        </div>
        <div className="flex justify-evenly">
          {data2.map(data => (
            <ProductCard
              key={data.name}
              name={data.name}
              feature={data.feature}
              img={data.img}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
