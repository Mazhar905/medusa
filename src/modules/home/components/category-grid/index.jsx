import CategoryTemplate from "@modules/categories/templates"
import InteractiveLink from "@modules/common/components/interactive-link"

export default async function CategoryGrid({ title, handle, region, limit }) {
  return (
    <div className="py-8 ">
      <div className="content-container md:mx-auto">
        <div className="flex justify-between items-center border-b border-[#ccc] mb-1 md:mb-2">
          <h2 className="text-center text-lg md:text-xl font-light tracking-wider hover:underline">
            {title}
          </h2>
          <div className="flex justify-center">
            <InteractiveLink href="/categories/{handle}">
              View More
            </InteractiveLink>
          </div>
        </div>
        <CategoryTemplate
          sortBy={""}
          page={0}
          limit={limit}
          countryCode={region}
          categoryName={handle}
        />
        {/* <div className="flex justify-center my-6">
          <InteractiveLink href="/categories/{handle}">
            View More
          </InteractiveLink>
        </div> */}
      </div>
    </div>
  )
}
