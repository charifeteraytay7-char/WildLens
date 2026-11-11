
import { useFavorites } from '../context/useFavorites'
import ObservationCard from '../components/ObservationCard'

function Favorites() {
  const { favorites } = useFavorites()

  return (
    <main className="page-container">
      <section className="hero-section">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>

        <h1>Your Favorite Wildlife</h1>

        <p className="hero-description">
          Keep track of the amazing wildlife observations you've
          discovered. Your saved favorites will remain available
          even after you close or refresh your browser.
        </p>
      </section>

      <section className="explore-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SAVED OBSERVATIONS</p>
            <h2>My Collection</h2>
          </div>

          <span className="result-label">
            {favorites.length} saved
          </span>
        </div>

        {favorites.length === 0 ? (
          <div className="loading-placeholder">
            <p>You haven't saved any wildlife observations yet.</p>
            <p>
              Visit Worldwide Explore or Philippines and select
              "Save to Favorites" on an observation.
            </p>
          </div>
        ) : (
          <div className="observation-grid">
            {favorites.map((observation) => (
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

export default Favorites
