import { Text, clx } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SubscribeForm from "@modules/layout/templates/footer/subscribeForm"
import paymentImage from "../../../../../public/payment_carts.png"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import { FooterMenuItems } from "@lib/menu-item"
import Link from "next/link"
export default async function Footer() {
  const { product_categories } = await getCategoriesList(0, 100)
  const { collections } = await getCollectionsList(0, 6)

  return (
    <footer className="border-t border-ui-border-base w-full pt-10 bg-[#000b1e] text-white">
      <div className="content-container flex flex-col w-full">
        <div className="grid grid-cols-4 gap-x-6 gap-y-10 items-start justify-between">
          <div className="flex flex-col gap-y-2">
            <LocalizedClientLink href="/" className="uppercase text-[#ff4800]">
              <h1>egala spot</h1>
            </LocalizedClientLink>
            <Text>
              Founded in 2021, we’re an online retailer for blank apparel from
              best-selling brands. We deliver more than just high-quality goods
              at a fantastic value. We’re here to bring you a better customer
              experience.
            </Text>
          </div>
          <div className="text-small-regular gap-5 md:gap-x-5 grid grid-cols-2 pb-5 px-5">
            {product_categories && product_categories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-large-semi capitalize text-[#ff4800]">
                  shop by style
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {product_categories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li className="flex flex-col gap-2 txt-small" key={c.id}>
                        <LocalizedClientLink
                          className={clx("", children && "txt-small-plus")}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className=""
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus text-large-semi capitalize text-[#ff4800]">
                  Shop top brands
                </span>
                <ul
                  className={clx("flex flex-col gap-2 txt-small", {
                    "grid-cols-2": (collections?.length || 0) > 3,
                  })}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className=""
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="txt-small-plus text-large-semi capitalize text-[#ff4800]">
              Subscribe Our Newsletter
            </span>
            <SubscribeForm />
          </div>
        </div>
        <div className="flex items-center justify-center py-5 gap-x-5">
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <FaPinterest size={24} />
          <FaLinkedin size={24} />
          <FaYoutube size={24} />
          <BsTwitterX size={24} />
        </div>
        <div className="flex flex-col md:flex-row w-full py-6 justify-between text-black-500 border-t items-center">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} EgalaSpot. All rights reserved.
          </Text>
          <Image src={paymentImage} alt="payments method" />
          <ul className="flex items-center space-x-4 capitalize">
            {FooterMenuItems.map((x) => {
              return (
                <li key={x.name} className="inline-flex items-center">
                  <Link href={x.path} className="text-xs">
                    {x.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
