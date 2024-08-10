/* eslint-disable react/no-unescaped-entities */
// import { Metadata } from "next"

// images
import category1 from "../../../../public/bg-img/banner_minipage1.jpg"
import category2 from "../../../../public/bg-img/banner_minipage2.jpg"
import category3 from "../../../../public/bg-img/banner_minipage3.jpg"
import category4 from "../../../../public/bg-img/banner_minipage1.jpg"
import category5 from "../../../../public/bg-img/banner_minipage2.jpg"
import category6 from "../../../../public/bg-img/banner_minipage3.jpg"
import category7 from "../../../../public/bg-img/banner_minipage1.jpg"
import category8 from "../../../../public/bg-img/banner_minipage2.jpg"
import bellaImage from "../../../../public/bella-canvas-wholesale-clothing.webp"
import nextLevelImage from "../../../../public/next-level-apparel-wholesale.webp"
import threadImage from "../../../../public/threadfast-apparel-wholesale.webp"
import americanImage from "../../../../public/american-apparel-wholesale.jpg"
import glidanlImage from "../../../../public/wholesale-clothing-gildan.png"
import hanesImage from "../../../../public/wholesale-hanes-clothing.jpg"
import cusImage from "../../../../public/cus-embroidery-home.png"
import screenImage from "../../../../public/screen-printing-home.png"

import Hero from "@modules/home/components/hero"
import { getRegion, getCategoriesList } from "@lib/data"
import CategoryTemplate from "@modules/categories/templates"
import Image from "next/image"
import InteractiveLink from "@modules/common/components/interactive-link"
import CategoryBox from "@modules/home/components/category-box"
import { Text } from "@medusajs/ui"
import { FaShippingFast } from "react-icons/fa"
export const metadata = {
  title: "EgalaSpot",
  description: "A ecommerce sotre.",
}

export default async function Home({ params: { countryCode } }) {
  const { product_categories, count } = await getCategoriesList(0, 8)

  const region = await getRegion(countryCode)
  // const catGrids = process.env.CAT_GRIDS
  // if (!collections || !region) {
  if (!region) {
    return null
  }
  const brands = [
    { id: 1, name: "bella + canvas", image: bellaImage },
    { id: 1, name: "next level appael", image: nextLevelImage },
    { id: 1, name: "hanes", image: hanesImage },
    { id: 1, name: "glidan", image: glidanlImage },
    { id: 1, name: "threadfast apparel", image: threadImage },
    { id: 1, name: "american apparel", image: americanImage },
  ]
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
    <>
      <Hero />
      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
      <CategoryGrid title="Latest Products" limit={8} region={countryCode} />
      <div className="py-8 bg-gray-200">
        <div className="md:mx-auto px-4">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
            Top Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-3">
            {categories.slice(0, 8).map((category) => (
              <CategoryBox
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
      <CategoryGrid title="Weekly Deals" limit={8} region={countryCode} />
      <CategoryGrid title="Best Sellers" limit={8} region={countryCode} />
      <WhyChose title="Why Chose Egala Spot" />
      <div className="mx-auto px-4 py-8 bg-gray-200">
        <div className="container">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-2 md:mb-8">
            Shop Our Top Brands
          </h2>
          <div className="flex justify-center flex-wrap items-center gap-x-5 gap-y-5">
            {brands.map((brand) => (
              <InteractiveLink
                key={brand.name}
                href={`/brand/${brand.link}`}
                className="text-lg font-bold text-gray-900 hover:text-gray-700 mx-auto gap-y-3"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  className="rounded-full max-w-[150px] min-w-[150px] mx-auto mb-2"
                  width={150}
                  height={150}
                />
                <h2 className="text-center text-xl font-light tracking-wider hover:underline uppercase">
                  {brand.name}
                </h2>
              </InteractiveLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function CategoryGrid({ title, region, limit }) {
  const handle = title.toLowerCase().replace(" ", "-")
  return (
    <div className="py-8">
      <div className="md:mx-auto px-1 md:px-4">
        <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
          {title}
        </h2>
        <CategoryTemplate
          sortBy={""}
          page={0}
          limit={limit}
          countryCode={region}
          categoryName={handle}
        />
      </div>
    </div>
  )
}

function WhyChose({ title }) {
  return (
    <div className="py-8 md:py-16 md:mx-auto px-1 md:px-10 bg-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start">
        <div className="flex flex-col justify-start gap-y-5 items-start p-5">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-2 md:mb-8">
            {title}
          </h2>
          <Text>
            Veetrends.com is a dynamic online clothing store which was
            established in 2007. We are specialized in blank apparels,
            embroidery, screen printing services and other promotional items.
            Our mission is to offer a courteous and personalized services to our
            clients. For us, the client is considered as part our family and
            that's very important.
          </Text>
          <div className="flex flex-row items-center justify-between border-2 border-red-500 rounded border- p-4 w-[90%] md:w-[80%]">
            <div className="">
              <h6 className="text-sm font-semibold">Same Day Shippign</h6>
              <p className="text-xs font-light">
                On orders placed before 01:00pm
              </p>
            </div>
            <div>
              <FaShippingFast size={32} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between border-2 border-red-500 rounded border- p-4 w-[90%] md:w-[80%]">
            <div className="">
              <h6 className="text-sm font-semibold">Same Day Shippign</h6>
              <p className="text-xs font-light">
                On orders placed before 01:00pm
              </p>
            </div>
            <div>
              <FaShippingFast size={32} />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between border-2 border-red-500 rounded border- p-4 w-[90%] md:w-[80%]">
            <div className="">
              <h6 className="text-sm font-semibold">Same Day Shippign</h6>
              <p className="text-xs font-light">
                On orders placed before 01:00pm
              </p>
            </div>
            <div>
              <FaShippingFast size={32} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-5 p-5">
          <Image src={cusImage} alt="why"></Image>
          <Image src={screenImage} alt="why"></Image>
        </div>
      </div>
    </div>
  )
}
