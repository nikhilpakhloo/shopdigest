'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center h-screen  p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-md w-full">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-700 mb-6">An unexpected error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
