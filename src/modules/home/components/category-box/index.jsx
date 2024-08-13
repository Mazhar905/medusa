/* eslint-disable jsx-a11y/alt-text */
// images
import category1 from "../../../../../public/bg-img/banner_minipage1.jpg"
import category2 from "../../../../../public/bg-img/banner_minipage2.jpg"
import category3 from "../../../../../public/bg-img/banner_minipage3.jpg"
import category4 from "../../../../../public/bg-img/banner_minipage1.jpg"
import category5 from "../../../../../public/bg-img/banner_minipage1.jpg"
import category6 from "../../../../../public/bg-img/banner_minipage1.jpg"
import category7 from "../../../../../public/bg-img/banner_minipage1.jpg"
import category8 from "../../../../../public/bg-img/banner_minipage1.jpg"
import InteractiveLink from "@modules/common/components/interactive-link"
import Image from "next/image"
import Link from "next/link"

const CategoryBox = ({product_categories}) => {
  const images = [
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
    category8,
  ]

  const categories = product_categories.map((category, index) => ({
    id: category.id,
    name: category.name,
    link: category.handle,
    image: images[index],
  }))

  return (
    <div className="py-8 bg-gray-200">
      <div className="md:mx-auto px-4">
        <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
          Top Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-3">
          {categories.slice(0, 8).map((category) => (
            <Box
              key={category.name}
              image={category.image}
              name={category.name}
              link={`/categories/${category.link}`}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <InteractiveLink href="/category">
            View All Categories
          </InteractiveLink>
        </div>
      </div>
    </div>
  )
}

function Box({ name, image, link }) {
  return (
    <Link href={link} className="block">
      <div className="relative flex items-center justify-center border border-gray-300 p-8 shadow-lg transition-transform transform hover:scale-105hover:shadow-xl aspect-square">
        <Image src={image} fill alt={name} />
        <div className="bg-black bg-opacity-50 text-white text-sm md:text-xl font-bold px-4 py-2 z-50">
          {name}
        </div>
      </div>
    </Link>
  )
}
export default CategoryBox
