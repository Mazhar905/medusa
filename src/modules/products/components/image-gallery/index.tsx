"use client"
import { useState } from "react"
import { Image as MedusaImage } from "@medusajs/medusa"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import InnerImageZoom from "react-inner-image-zoom"
type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [mainImage, setMainImage] = useState<MedusaImage>(images[0])
  return (
    <div className="flex flex-col items-center relative">
      <div
        className="relative aspect-[29/34] w-full max-w-xl overflow-hidden bg-ui-bg-subtle mb-4"
        id={mainImage.id}
      >
        {/* <img src={mainImage.url} alt="Main Product Image" height={500}/> */}
        <InnerImageZoom src={mainImage.url} />
        {/* <Image
          src={mainImage.url}
          priority
          className="absolute inset-0 rounded-rounded"
          alt={`Main product image`}
          fill
          style={{
            objectFit: "cover",
          }}
        /> */}
      </div>
      <div className="flex flex-wrap justify-start gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-[29/34] w-24 h-24 overflow-hidden bg-ui-bg-subtle cursor-pointer border rounded-md"
            id={image.id}
            onClick={() => setMainImage(image)}
          >
            <img src={image.url} alt={`Product image ${index + 1}`} />
            {/* <Image
              src={image.url}
              priority={index <= 2 ? true : false}
              className="absolute inset-0 rounded-rounded"
              alt={`Product image ${index + 1}`}
              fill
              style={{
                objectFit: "cover",
              }}
            /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
