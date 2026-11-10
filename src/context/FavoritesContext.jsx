
import { useEffect, useState } from 'react'
import { FavoritesContext } from './FavoritesContext.js'

const STORAGE_KEY = 'wildlens-favorites'

function getSavedFavorites() {
  try {
    const savedFavorites = localStorage.getItem(STORAGE_KEY)

    if (!savedFavorites) {
      return []
    }

    const parsedFavorites = JSON.parse(savedFavorites)

    return Array.isArray(parsedFavorites) ? parsedFavorites : []
  } catch {
    return []
  }
}

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(getSavedFavorites)

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favorites)
      )
    } catch (error) {
      console.error('Unable to save favorites:', error)
    }
  }, [favorites])

  function toggleFavorite(observation) {
    setFavorites((currentFavorites) => {
      const alreadySaved = currentFavorites.some(
        (favorite) => favorite.id === observation.id
      )

      if (alreadySaved) {
        return currentFavorites.filter(
          (favorite) => favorite.id !== observation.id
        )
      }

      return [...currentFavorites, observation]
    })
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}
