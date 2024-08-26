import Image from "next/image"
import React from "react"
import ecoImage from "../../../../../public/econscious.jpg"
import lowestImage from "../../../../../public/lowest-price.png"
const PromoLabel = ({ data }) => {
  return (
    <div className="Prod_Labels hidden md:block rounded-md bg-slate-300 p-5 my-8">
      <div className="flex flex-row justify-start items-center gap-x-5">
        <div className="w-1/4 flex justify-center items-center">
          <Image src={data.imageSrc} alt={data.heading} />
        </div>
        <div className="w-3/4 text-left">
          {data.heading && (
            <h4 className="text-lg font-semibold">{data.heading}</h4>
          )}
          <p className="text-sm">{data.description}</p>
        </div>
      </div>
    </div>
  )
}

const PromoLabels = () => {
  const promoData = [
    {
      imageSrc: lowestImage,
      heading: "Lowest Prices Guaranteed",
      description:
        "Now you can free return within 99 Days for any reason no shipping charges.",
    },
    {
      imageSrc: ecoImage,
      heading: "",
      description:
        "If you are looking for some comfortable casual wear with a touch of unique style and an amazing blend of colors, you can get them here by District. District has got a collection of casual wear that is inspired by the latest fashion trends.",
    },
  ]

  return (
    <div>
      {promoData.map((item, index) => (
        <PromoLabel key={index} data={item} />
      ))}
    </div>
  )
}

export default PromoLabels
