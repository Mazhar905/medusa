import React from "react"
import { faker } from "@faker-js/faker"

const generateRandomReviews = (count) => {
  return Array.from({ length: count }).map(() => ({
    name: faker.person.firstName() + " " + faker.person.lastName(),
    review: faker.lorem.sentences(2),
    rating: faker.number.int({ min: 1, max: 5 }),
  }))
}

const Ratings = ({ reviews }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg md:text-2xl font-bold mb-1 text-center">
        Product Reviews
      </h2>
      <p className="text-xs md:text-sm text-center mb-4">
        (Only Registered Customers Can Rate)
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-lg font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{review.review}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.162 3.574a1 1 0 00.95.69h3.772c.969 0 1.371 1.24.588 1.81l-3.048 2.21a1 1 0 00-.364 1.118l1.162 3.573c.3.921-.755 1.688-1.54 1.118l-3.048-2.21a1 1 0 00-1.176 0l-3.048 2.21c-.784.57-1.839-.197-1.54-1.118l1.162-3.573a1 1 0 00-.364-1.118L2.48 9.002c-.783-.57-.38-1.81.588-1.81h3.772a1 1 0 00.95-.69l1.162-3.574z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const RatingGrid = () => {
  const reviews = generateRandomReviews(12) // Generate 9 random reviews

  return (
    <div className="content-container">
      <Ratings reviews={reviews} />
    </div>
  )
}

export default RatingGrid
