import { TopMenuItems } from "@lib/menu-item"
import Link from "next/link"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Topbar = () => {
  return (
    <>
      <div className="bg-[#ff4800] text-gray-100 block md:hidden">
        <div className="content-container flex mx-auto justify-between items-center py-1 text-xs">
          <p className="capitalize">
            Free Embroidery <a href="/decoration-quotes.aspx">Cick here!</a>
          </p>
          <p className="">Free shipping on orders over $249 *</p>
        </div>
      </div>
      <div className="bg-[#ff4800] text-gray-100 hidden md:block">
        <div className="content-container flex mx-auto justify-center items-center py-1">
          <p>
            LOOKING FOR EMBROIDERY AND <i className="fas fa-print"></i> SCREEN
            PRINTING?
            <a href="/decoration-quotes.aspx">GET A FREE QUOTE NOW !</a>
          </p>
        </div>
      </div>
      <div className="bg-[#f2f2f2] hidden lg:block h-[3]">
        <div className="content-container flex mx-auto justify-between items-center py-1 text-xs">
          <p>FREE shipping on orders over $249 *</p>
          <p>
            Toll Free : +1 800-457-2269 | Monday - Friday 8:00 am - 5:30 pm PDT
          </p>
        </div>
      </div>
    </>
  )
}

export default Topbar
