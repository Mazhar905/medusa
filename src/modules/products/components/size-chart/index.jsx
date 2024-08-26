import React from "react"

const SizeChart = () => {
  const sizeChartData = [
    { label: "BILL LENGTH", value: "2.25" },
    { label: "CROWN HEIGHT", value: "3" },
    { label: "HAT BAND", value: "22.83" },
  ]

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Size Chart</h1>
      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left text-sm font-medium text-gray-700">
              SIZE
            </th>
            <th className="border border-gray-300 p-3 text-left text-sm font-medium text-gray-700">
              ONE SIZE
            </th>
          </tr>
        </thead>
        <tbody>
          {sizeChartData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="border border-gray-300 p-3 text-xs text-gray-600">
                {row.label}
              </td>
              <td className="border border-gray-300 p-3 text-xs text-gray-600">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SizeChart
