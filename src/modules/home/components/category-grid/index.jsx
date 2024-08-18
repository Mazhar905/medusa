import CategoryTemplate from "@modules/categories/templates"
export default function CategoryGrid({ title, handle, region, limit }) {
    return (
      <div className="py-8">
        <div className="md:mx-auto px-1 md:px-4">
          <h2 className="text-center text-xl md:text-3xl font-light tracking-wider hover:underline mb-4 md:mb-8">
            {title}
          </h2>
          <CategoryTemplate
            sortBy={""}
            page={0}
            limit={limit}
            countryCode={region}
            categoryName={handle}
          />
        </div>
      </div>
    )
  }
  