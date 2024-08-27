"use client"
import React, { useState } from "react"
import { FaAngleDown, FaAngleRight, FaAngleUp } from "react-icons/fa"
const SidebarFilter = ({ categories, brands, prices, sizes, colors }) => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState([0, 100])
  const [openSections, setOpenSections] = useState({
    1: true,
    2: true,
    3: true,
  })

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    )
  }

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    )
  }

  const handlePriceChange = (event) => {
    const { value, name } = event.target
    setPriceRange((prev) => {
      const newRange = [...prev]
      if (name === "min") newRange[0] = Number(value)
      if (name === "max") newRange[1] = Number(value)
      return newRange
    })
  }

  const applyFilters = () => {
    // Apply filter logic here
  }

  const data = [
    {
      key: 1,
      title: "Categories",
      content: (
        <CheckBoxFilters
          data={categories}
          handleChange={handleCategoryChange}
        />
      ),
    },
    {
      key: 2,
      title: "Brands",
      content: (
        <CheckBoxFilters data={brands} handleChange={handleBrandChange} />
      ),
    },
    // {
    //   key: 3,
    //   title: "Price Range",
    //   content: (
    //     <PriceRange
    //       priceRange={priceRange}
    //       handlePriceChange={handlePriceChange}
    //     />
    //   ),
    // },
    {
      key: 4,
      title: "Colors",
      content: "",
    },
    {
      key: 5,
      title: "Sizes",
      content: "",
    },
  ]

  return (
    <div className="">
      {data.map((item) => (
        <div key={item.key} className="mb-1">
          <div
            className="flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
            onClick={() => toggleSection(item.key)}
          >
            <span>{item.title}</span>
            <span>
              {openSections[item.key] ? (
                <FaAngleUp size={16} />
              ) : (
                <FaAngleDown size={16} />
              )}
            </span>
          </div>
          <div
            className={`p-4 border border-gray-200 ${
              openSections[item.key] ? "block" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}

      <button
        onClick={applyFilters}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded mt-4"
      >
        Apply Filters
      </button>
    </div>
  )
}

export default SidebarFilter

const PriceRange = ({ priceRange, handlePriceChange }) => {
  return (
    <div className="flex items-center justify-between mt-2">
      <input
        type="number"
        name="min"
        value={priceRange[0]}
        onChange={handlePriceChange}
        className="w-20 p-1 border border-gray-300 rounded"
      />
      <span className="mx-2">-</span>
      <input
        type="number"
        name="max"
        value={priceRange[1]}
        onChange={handlePriceChange}
        className="w-20 p-1 border border-gray-300 rounded"
      />
    </div>
  )
}

const CheckBoxFilters = ({ data, handleChange }) => {
  return (
    <ul className="mt-2">
      {data.map((x) => (
        <li key={x.id}>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              onChange={() => handleChange(x.name || x.title)}
              className="form-checkbox"
            />
            <span className="ml-2">{x.name || x.title}</span>
          </label>
        </li>
      ))}
    </ul>
  )
}
