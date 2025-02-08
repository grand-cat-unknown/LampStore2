import { useState, useEffect } from 'react'

interface Ratings {
  [key: string]: number
}

export function useRatings() {
  const [ratings, setRatings] = useState<Ratings>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRatings()
  }, [])

  const fetchRatings = async () => {
    try {
      const response = await fetch('/api/ratings')
      const data = await response.json()
      setRatings(data.ratings)
    } catch (error) {
      console.error('Failed to fetch ratings:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateRating = async (lampId: string, rating: number) => {
    try {
      await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lampId, rating }),
      })
      
      setRatings(prev => ({
        ...prev,
        [lampId]: rating
      }))
    } catch (error) {
      console.error('Failed to update rating:', error)
    }
  }

  return {
    ratings,
    loading,
    updateRating
  }
} 