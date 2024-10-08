"use client"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Back from "@modules/common/icons/back"
import FastDelivery from "@modules/common/icons/fast-delivery"
import Refresh from "@modules/common/icons/refresh"
import React from "react"
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Tab,
  Tabs,
} from "@nextui-org/react"
import { Text } from "@medusajs/ui"

const ProductAccordion = ({ product }) => {
  const tabs = [
    {
      label: "Description",
      component: <ProductDescription para={product.description} />,
    },
    {
      label: "Product Information",
      component: <ProductInfoTab product={product} />,
    },
    { label: "Shipping & Returns", component: <ShippingInfoTab /> },
  ]
  return (
    <div className="flex w-full flex-col">
      <Tabs disabledKeys={["music"]} aria-label="Disabled Options" radius="full" color="primary">
        {tabs.map((tab) => (
          <Tab key={tab.label} title={tab.label} className="">
            <Card>
              <CardBody className="">
                {tab.component}
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
    // <div className="flex flex-col w-full mt-5">
    //   <div className="w-full px-4">
    //     <Accordion type="single">
    //       {tabs.map((tab) => (
    //         <AccordionItem key={tab.label} title={tab.label}>
    //           {tab.component}
    //         </AccordionItem>
    //       ))}
    //     </Accordion>
    //   </div>
    // </div>
  )
}

const ProductDescription = ({ para }) => {
  return (
    <div className="text-sm py-8">
      <Text>{para}</Text>
    </div>
  )
}

const ProductInfoTab = ({ product }) => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-2 gap-x-8">
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Material</span>
            <p>{product.material || "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Country of origin</span>
            <p>{product.origin_country || "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Type</span>
            <p>{product.type?.value || "-"}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div>
            <span className="font-semibold">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </div>
          <div>
            <span className="font-semibold">Dimensions</span>
            <p>
              {product["length"] && product.width && product.height
                ? `${product["length"]} L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const ShippingInfoTab = () => {
  return (
    <div className="text-sm py-8">
      <div className="grid grid-cols-1 gap-y-8">
        <div className="flex items-start gap-x-2">
          <FastDelivery />
          <div>
            <span className="font-semibold">Fast delivery</span>
            <p>
              Your package will arrive in 3-5 business days at your pick-up
              location or in the comfort of your home.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Refresh />
          <div>
            <span className="font-semibold">Simple exchanges</span>
            <p>
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-2">
          <Back />
          <div>
            <span className="font-semibold">Easy returns</span>
            <p>
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAccordion
