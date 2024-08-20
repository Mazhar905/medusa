import { Text } from "@medusajs/ui"
// import { Image } from "@nextui-org/react"
import { FaShippingFast } from "react-icons/fa"
import cusImage from "../../../../../public/cus-embroidery-home.png"
import screenImage from "../../../../../public/screen-printing-home.png"
import Image from "next/image"

export default function WhyChose({ title }) {
  return (
    <div className="py-8 md:py-16 md:mx-auto px-1 md:px-10 bg-slate-100">
      <div className="content-container grid grid-cols-1 md:grid-cols-2 items-start justify-start">
        <div className="flex flex-col justify-start gap-y-5 items-start p-5">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-2 md:mb-8">
            {title}
          </h2>
          <Text>
            Veetrends.com is a dynamic online clothing store which was
            established in 2007. We are specialized in blank apparels,
            embroidery, screen printing services and other promotional items.
            Our mission is to offer a courteous and personalized services to our
            clients. For us, the client is considered as part our family and that very important.
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
          <Image src={cusImage} alt="why" />
          <Image src={screenImage} alt="why" />
        </div>
      </div>
    </div>
  )
}
