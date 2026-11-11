
import { useFavorites } from '../context/useFavorites'

const LICENSE_NAMES = {
  cc0: 'CC0 - Public Domain',
  'cc-by': 'CC BY - Attribution',
  'cc-by-nc': 'CC BY-NC - Attribution-NonCommercial',
  'cc-by-sa': 'CC BY-SA - Attribution-ShareAlike',
  'cc-by-nd': 'CC BY-ND - Attribution-NoDerivatives',
  'cc-by-nc-sa': 'CC BY-NC-SA - Attribution-NonCommercial-ShareAlike',
  'cc-by-nc-nd': 'CC BY-NC-ND - Attribution-NonCommercial-NoDerivatives',
}

function ObservationCard({ observation }) {
  const { favorites, toggleFavorite } = useFavorites()

  const isFavorite = favorites.some(
    (favorite) => favorite.id === observation.id
  )

  const speciesName =
    observation.taxon?.preferred_common_name ||
    observation.taxon?.name ||
    'Unknown species'

  const scientificName =
    observation.taxon?.name || 'Scientific name unavailable'

  const photo = observation.photos?.[0]

  const imageUrl =
    photo?.url?.replace('square', 'medium') || ''

  const location =
    observation.place_guess || 'Location unavailable'

  const photographer =
    photo?.attribution || 'Photographer credit unavailable'

  const licenseCode = photo?.license_code?.toLowerCase()

  const licenseName = licenseCode
    ? LICENSE_NAMES[licenseCode] || licenseCode.toUpperCase()
    : 'License not specified'

  return (
    <article className="observation-card">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={speciesName}
          className="observation-image"
          loading="lazy"
        />
      ) : (
        <div className="observation-image image-placeholder">
          No image available
        </div>
      )}

      <div className="observation-content">
        <h3>{speciesName}</h3>

        <p className="scientific-name">
          {scientificName}
        </p>

        <p className="observation-location">
          📍 {location}
        </p>

        <button
          type="button"
          className="favorite-button"
          onClick={() => toggleFavorite(observation)}
          aria-pressed={isFavorite}
        >
          {isFavorite ? '♥ Remove from Favorites' : '♡ Save to Favorites'}
        </button>

        <div className="photo-credit">
          <p>
            <strong>Photo credit:</strong> {photographer}
          </p>

          <p>
            <strong>Photo license:</strong> {licenseName}
          </p>

          <a
            href="https://www.inaturalist.org/licenses"
            target="_blank"
            rel="noreferrer"
          >
            Learn about photo licenses
          </a>
        </div>

        {observation.id && (
          <a
            href={`https://www.inaturalist.org/observations/${observation.id}`}
            target="_blank"
            rel="noreferrer"
            className="observation-link"
          >
            View original observation
          </a>
        )}
      </div>
    </article>
  )
}

export default ObservationCard
