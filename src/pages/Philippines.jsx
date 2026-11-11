
import { useEffect, useState } from 'react'
import { getObservations } from '../services/inaturalistApi'
import ObservationCard from '../components/ObservationCard'

function Philippines() {
  const [observations, setObservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    let isActive = true

    async function fetchPhilippineWildlife() {
      try {
        setLoading(true)
        setError('')

        const data = await getObservations({
          placeId: 6873,
          perPage: 12,
        })

        if (isActive) {
          setObservations(data.results)
        }
      } catch (err) {
        if (isActive) {
          setError(
            err.message ||
              'Unable to load Philippine wildlife observations.'
          )
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    fetchPhilippineWildlife()

    return () => {
      isActive = false
    }
  }, [retryCount])

  function handleRetry() {
    setRetryCount((currentCount) => currentCount + 1)
  }

  return (
    <main className="page-container">
      <section className="hero-section philippines-hero">
        <p className="eyebrow">EXPLORE LOCAL BIODIVERSITY</p>

        <h1>Discover Wildlife in the Philippines</h1>

        <p className="hero-description">
          Explore the incredible wildlife and biodiversity recorded
          across the Philippine islands. Discover native species
          and observations shared by nature enthusiasts.
        </p>
      </section>

      <section className="explore-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PHILIPPINE BIODIVERSITY</p>
            <h2>Wildlife Observations</h2>
          </div>

          <span className="result-label">Philippines</span>
        </div>

        {loading && (
          <div className="loading-placeholder">
            <p>Loading Philippine wildlife observations...</p>
          </div>
        )}

        {error && (
          <div className="loading-placeholder">
            <p>{error}</p>

            <button type="button" onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && observations.length === 0 && (
          <div className="loading-placeholder">
            <p>No Philippine wildlife observations were found.</p>
          </div>
        )}

        {!loading && !error && observations.length > 0 && (
          <div className="observation-grid">
            {observations.map((observation) => (
              <ObservationCard
                key={observation.id}
                observation={observation}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default Philippines
