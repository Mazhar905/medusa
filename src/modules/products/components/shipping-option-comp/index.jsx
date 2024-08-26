import React from "react"
import paypalImage from "../../../../../public/paypal_icon.png"
import freeShipImage from "../../../../../public/freeshipping_icon.png"
import serviceImage from "../../../../../public/serviceguaranteed_icon.png"
import Image from "next/image"
const ShippingOptionComp = () => {
  const data = [
    { name: "shop now pay later", image: paypalImage },
    { name: "free shipping on orders over", image: freeShipImage },
    { name: "Service Guarantee", image: serviceImage },
  ]
  return (
    <div className="flex gap-x-8 justify-center items-center">
      {data.map((x) => {
        return (
          <div
            className="relative flex border border-dashed rounded-md border-[#222c69] p-4 justify-center items-center gap-x-3"
            key={x.name}
          >
            <Image src={x.image} alt={x.name} className="w-[30%]" />
            <p className="font-bold text-xs capitalize">{x.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ShippingOptionComp
