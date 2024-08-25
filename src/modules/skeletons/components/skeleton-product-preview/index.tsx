import { Container } from "@medusajs/ui"

const SkeletonProductPreview = () => {
  return (
    <div className="bg-white shadow-md border rounded-xl p-4 w-72 animate-pulse">
      <div className="h-40 bg-gray-200 rounded-t-xl"></div>
      <div className="px-4 py-3">
        <div className="bg-gray-200 h-4 w-16 mb-2"></div>
        <div className="bg-gray-300 h-6 w-48 mb-3"></div>
        <div className="flex justify-start gap-x-2 mb-3">
          <div className="bg-gray-200 h-4 w-16"></div>
        </div>
        <div className="bg-gray-200 h-4 w-24 mb-3"></div>
      </div>
      <div className="px-1 sm:px-2 pb-3 mt-2">
        <div className="bg-gray-200 h-4 w-20 mx-auto"></div>
      </div>
      <p className="text-center bg-gray-200 h-4 w-24 mx-auto mt-3"></p>
    </div>

    // <div className="animate-pulse">
    //   <Container className="aspect-[9/16] w-full bg-gray-100 bg-ui-bg-subtle" />
    //   <div className="flex justify-between text-base-regular mt-2">
    //     <div className="w-2/5 h-6 bg-gray-100"></div>
    //     <div className="w-1/5 h-6 bg-gray-100"></div>
    //   </div>
    // </div>
  )
}

export default SkeletonProductPreview
