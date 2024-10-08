import { Suspense } from "react"

import { getCategoriesList, listRegions } from "@lib/data"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NewsletterPopup from "@modules/common/components/newsletter-popup"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Topbar from "./topBar"
import { clx } from "@medusajs/ui"
import { IoMdPerson } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5"
import SearchModal from "@modules/search/templates/search-modal"
import { CiSearch } from "react-icons/ci"
import Link from "next/link"
import { MainMenuItems } from "@lib/menu-item"
export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  // const { product_categories } = await getCategoriesList(0, 100)
  return (
    <>
      <Topbar />
      <NewsletterPopup />
      <div className="sticky top-0 inset-x-0 z-50">
        <header className="flex flex-col items-center mx-auto duration-200 bg-white border-ui-border-base">
          <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-[60px] text-small-regular">
            <div className="flex items-center h-full">
              <LocalizedClientLink
                href="/"
                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                data-testid="nav-store-link"
              >
                <h1>Egala Spot</h1>
              </LocalizedClientLink>
            </div>
            <div className="hidden md:flex items-center h-full mx-auto w-[60%] justify-center">
              {/* <SearchModal /> */}
            </div>
            <div className="flex items-center gap-x-6 h-full justify-end">
              <div className="flex flex-col items-center justify-center gap-x-6 h-full text-xs md:text-base text-black hover:text-[#ff4800]">
                <LocalizedClientLink
                  className=""
                  href="/account"
                  data-testid="nav-account-link"
                >
                  <span className="block md:hidden">
                    <IoMdPerson size={16} />
                  </span>
                  <span className="hidden md:block">
                    <IoMdPerson size={24} />
                  </span>
                </LocalizedClientLink>
                <LocalizedClientLink
                  className=""
                  href="/account"
                  data-testid="nav-account-link"
                >
                  Account
                </LocalizedClientLink>
              </div>
              {/* {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                    <LocalizedClientLink
                      className=" md:hidden flex flex-col justify-center items-center"
                      href="/search"
                      scroll={false}
                      data-testid="nav-search-link"
                    >
                     <CiSearch size={24} />
                      Search
                    </LocalizedClientLink>
                  )} */}
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className=" flex gap-2"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <span className="block md:hidden">
                      <IoCartOutline size={16} />
                    </span>
                    <span className="hidden md:block">
                      <IoCartOutline size={24} />
                    </span>
                    Cart (0)
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
              <div className="flex-1 md:hidden basis-0 h-full flex items-center">
                <div className="h-full">
                  <SideMenu regions={regions} />
                </div>
              </div>
            </div>
          </nav>
          <div className="bg-[#000b1e] h-[40px] hidden md:flex justify-center items-center w-full">
            <div className="content-container flex justify-center items-center text-white uppercase text-bold">
              <ul className="flex items-center space-x-8">
                {MainMenuItems.map((x) => {
                  return (
                    <li key={x.name} className="inline-flex items-center">
                      <Link href={x.path}>{x.name}</Link>
                    </li>
                  )
                })}
              </ul>
              {/* <CategoryMenu product_categories={product_categories} /> */}
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

const CategoryMenu = ({ product_categories }) => {
  const parentCategories = product_categories.filter(
    (category) => category.parent_category_id === null
  )

  const maxVisibleCategories = 8
  const visibleCategories = parentCategories.slice(0, maxVisibleCategories)
  const otherCategories = parentCategories.slice(maxVisibleCategories)

  return (
    parentCategories &&
    parentCategories.length > 0 && (
      <div className="flex flex-col gap-y-2">
        <ul
          className={clx(
            "flex flex-col md:flex-row gap-6 text-md font-light capitalize",
            {
              "grid-cols-2": (product_categories?.length || 0) > 3,
            }
          )}
        >
          {visibleCategories.map((category) => (
            <li key={category.id} className="relative">
              <a
                className="hover:text-ui-fg-base"
                href={`/categories/${category.handle}`}
              >
                {category.name}
              </a>
              {category.category_children.length > 0 && (
                <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-md z-10">
                  {category.category_children.map((child) => (
                    <li key={child.id} className="px-4 py-2 hover:bg-gray-100">
                      <a
                        className="block w-full text-left"
                        href={`/categories/${child.handle}`}
                      >
                        {child.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {otherCategories.length > 0 && (
            <li className="relative group">
              <span className="cursor-pointer hover:text-ui-fg-base">
                Other
              </span>
              {/* Ensure that this dropdown only shows on hover over "Other" */}
              <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-md z-10">
                {otherCategories.map((category) => (
                  <li
                    key={category.id}
                    className="relative px-4 py-2 hover:bg-gray-100 group"
                  >
                    <a
                      className="block w-full text-left"
                      href={`/categories/${category.handle}`}
                    >
                      {category.name}
                    </a>
                    {category.category_children.length > 0 && (
                      <ul className="absolute left-full top-0 mt-1 hidden group-hover:block bg-white border border-gray-200 shadow-lg rounded-md z-10">
                        {category.category_children.map((child) => (
                          <li
                            key={child.id}
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            <a
                              className="block w-full text-left"
                              href={`/categories/${child.handle}`}
                            >
                              {child.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
    )
  )
}
