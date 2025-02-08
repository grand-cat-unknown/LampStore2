import { useState, useEffect } from 'react'

interface Ratings {
  [key: string]: number
}

const RATINGS_STORAGE_KEY = 'lamp_ratings'

export function useRatings() {
  const [ratings, setRatings] = useState<Ratings>({})
  const [loading, setLoading] = useState(true)

  // Load initial ratings from localStorage and API
  useEffect(() => {
    const loadRatings = async () => {
      try {
        // First load from localStorage for immediate display
        const storedRatings = localStorage.getItem(RATINGS_STORAGE_KEY)
        if (storedRatings) {
          setRatings(JSON.parse(storedRatings))
        }

        // Then fetch from API
        const response = await fetch('/api/ratings')
        const data = await response.json()
        
        if (data.ratings) {
          // Update both state and localStorage with API data
          setRatings(data.ratings)
          localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(data.ratings))
        }
      } catch (error) {
        console.error('Failed to fetch ratings:', error)
        // If API fails, we still have localStorage data
      } finally {
        setLoading(false)
      }
    }

    loadRatings()
  }, [])

  const updateRating = async (lampId: string, rating: number) => {
    try {
      // Optimistically update UI and localStorage
      const newRatings = {
        ...ratings,
        [lampId]: rating
      }
      setRatings(newRatings)
      localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(newRatings))

      // Then update API
      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lampId, rating }),
      })

      if (!response.ok) {
        throw new Error('Failed to update rating on server')
      }

      const data = await response.json()
      if (data.error) {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error('Failed to update rating:', error)
      // On API failure, we still keep the localStorage and UI state updated
      // This ensures the user doesn't lose their rating even if the API call fails
    }
  }

  return {
    ratings,
    loading,
    updateRating
  }
} 