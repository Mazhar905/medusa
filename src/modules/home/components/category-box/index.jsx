import { HomeCats } from "@lib/home-cats"
import InteractiveLink from "@modules/common/components/interactive-link"
import Image from "next/image"
import Link from "next/link"

const CategoryBox = () => {
  return (
    <div className="py-8">
      <div className="content-container md:mx-auto border-b border-[#ccc]">
        <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
          Featured Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-3">
          {HomeCats.map((category) => (
            <Box key={category.name} category={category} />
          ))}
        </div>
        {/* <div className="flex justify-center mt-8">
          <InteractiveLink href="/category">
            View All Categories
          </InteractiveLink>
        </div> */}
      </div>
    </div>
  )
}

function Box({ category }) {
  return (
    <Link href={category.path} className="block">
      <div className="relative flex flex-col justify-center items-center">
        <Image
          src={category.image}
          alt={category.name}
          className="object-contain w-auto"
        />
        <div className="text-center text-sm md:text-xl font-bold px-4 py-2 capitalize">
          <h5>{category.name}</h5>
        </div>
      </div>
    </Link>
  )
}
export default CategoryBox
