
import { useEffect, useState } from 'react'
import { getObservations } from '../services/inaturalistApi'
import ObservationCard from '../components/ObservationCard'

const OBSERVATIONS_PER_PAGE = 12

function Home() {
  const [observations, setObservations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [retryCount, setRetryCount] = useState(0)

  const totalPages = Math.ceil(
    totalResults / OBSERVATIONS_PER_PAGE
  )

  useEffect(() => {
    let isActive = true

    async function fetchWildlife() {
      try {
        setLoading(true)
        setError('')

        const data = await getObservations({
          searchTerm,
          iconicTaxa: category,
          perPage: OBSERVATIONS_PER_PAGE,
          page,
        })

        if (isActive) {
          setObservations(data.results)
          setTotalResults(data.totalResults)
        }
      } catch (err) {
        if (isActive) {
          setError(
            err.message || 'Unable to load wildlife observations.'
          )
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    fetchWildlife()

    return () => {
      isActive = false
    }
  }, [searchTerm, category, page, retryCount])

  function handleSearch(event) {
    event.preventDefault()
    setPage(1)
    setSearchTerm(searchInput.trim())
  }

  function handleClear() {
    setSearchInput('')
    setSearchTerm('')
    setPage(1)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
    setPage(1)
  }

  function handlePreviousPage() {
    setPage((currentPage) => Math.max(currentPage - 1, 1))
  }

  function handleNextPage() {
    setPage((currentPage) =>
      Math.min(currentPage + 1, totalPages)
    )
  }

  function handleRetry() {
    setRetryCount((currentCount) => currentCount + 1)
  }

  return (
    <main className="page-container">
      <section className="hero-section">
        <p className="eyebrow">WILDLIFE & BIODIVERSITY DISCOVERY</p>

        <h1>Discover the Wonders of Wildlife</h1>

        <p className="hero-description">
          Explore wildlife observations from around the world.
          Discover amazing species and learn more about the biodiversity
          that makes our planet unique.
        </p>
      </section>

      <section className="explore-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE NATURE</p>
            <h2>Wildlife Observations</h2>
          </div>

          <span className="result-label">Worldwide</span>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search wildlife, e.g. tiger, eagle, butterfly..."
            aria-label="Search wildlife observations"
          />

          <button type="submit">Search</button>

          {searchTerm && (
            <button
              type="button"
              className="clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
          )}
        </form>

        <div className="filter-control">
          <label htmlFor="category-filter">Filter by category:</label>

          <select
            id="category-filter"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">All categories</option>
            <option value="Aves">Birds</option>
            <option value="Mammalia">Mammals</option>
            <option value="Insecta">Insects</option>
            <option value="Reptilia">Reptiles</option>
            <option value="Plantae">Plants</option>
          </select>
        </div>

        {searchTerm && (
          <p className="search-status">
            Search results for: <strong>{searchTerm}</strong>
          </p>
        )}

        {category && (
          <p className="search-status">
            Category: <strong>{category}</strong>
          </p>
        )}

        {loading && (
          <div className="loading-placeholder">
            <p>Loading wildlife observations...</p>
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
            <p>No wildlife observations were found.</p>
          </div>
        )}

        {!loading && !error && observations.length > 0 && (
          <>
            <div className="observation-grid">
              {observations.map((observation) => (
                <ObservationCard
                  key={observation.id}
                  observation={observation}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination-controls">
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  disabled={page === 1}
                >
                  Previous
                </button>

                <span>
                  Page {page} of {totalPages}
                </span>

                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={page >= totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  )
}

export default Home
