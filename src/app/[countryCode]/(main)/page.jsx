import Hero from "@modules/home/components/hero"
import { getRegion, getCategoriesList } from "@lib/data"
import CategoryGrid from "@modules/home/components/category-grid"
import CategoryBox from "@modules/home/components/category-box"
import BrandsGrid from "@modules/home/components/brands"
import WhyChose from "@modules/home/components/why-chose"
export const metadata = {
  title: "EgalaSpot",
  description: "A ecommerce sotre.",
}

export default async function Home({ params: { countryCode } }) {
  const { product_categories, count } = await getCategoriesList(0, 50)

  const region = await getRegion(countryCode)
  // const catGrids = process.env.CAT_GRIDS
  // if (!collections || !region) {
  if (!region) {
    return null
  }
  const categories = [
    "t-shirts",
    "sweatshirts",
    "polos",
    "bags-and-accessories",
    "pants",
    "fleece",
    // "sports",
  ]
  return (
    <>
      <Hero />
      <CategoryBox />
      {product_categories
        .filter((x) => categories.includes(x.handle.toLowerCase())) // Filter based on the categories array
        .map((x) => {
          return (
            <CategoryGrid
              key={x.name}
              title={x.name}
              handle={x.handle}
              limit={8}
              region={countryCode}
            />
          )
        })}
      <WhyChose title="Why Chose Egala Spot" />
      <BrandsGrid />
    </>
  )
}
