
import { getProductsListWithSort, getRegion } from "@lib/data"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

type PaginatedProductsParams = {
  limit: number
  collection_id?: string[]
  category_id?: string[]
  id?: string[]
}

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
  limit,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
  limit?: number
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const queryParams: PaginatedProductsParams = {
    limit: PRODUCT_LIMIT,
  }

  if (collectionId) {
    queryParams["collection_id"] = [collectionId]
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId]
  }

  if (productsIds) {
    queryParams["id"] = productsIds
  }

  const {
    response: { products, count },
  } = await getProductsListWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)
  return (
    <>
      <div className="text-end p-0 m-0">Total Products: {count}</div>
      <ul className="grid grid-cols-2 w-full sm:grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-2 sm:gap-y-6" data-testid="products-list">
        {products.map((p) => {
          return (
            <li key={p.id}>
              <ProductPreview productPreview={p} region={region} />
            </li>
          )
        })}
      </ul>
      {totalPages > 1 && <Pagination data-testid="product-pagination" page={page} totalPages={totalPages} />}
    </>
  )
}
