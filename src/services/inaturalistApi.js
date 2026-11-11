
const API_BASE_URL = (
  import.meta.env.VITE_INATURALIST_API_BASE_URL ||
  'https://api.inaturalist.org/v1'
).replace(/\/+$/, '')

// Build the API URL with its query parameters.
function buildApiUrl(endpoint, params = {}) {
  const url = new URL(`${API_BASE_URL}${endpoint}`)

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value))
    }
  })

  return url.toString()
}

// Send a request to the iNaturalist API.
async function apiRequest(endpoint, params = {}) {
  const url = buildApiUrl(endpoint, params)

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })

  if (!response.ok) {
    let errorMessage = ''

    try {
      const errorData = await response.json()
      errorMessage = errorData.error || errorData.message || ''
    } catch {
      // Use the HTTP error message if the response isn't JSON.
    }

    throw new Error(
      errorMessage ||
        `iNaturalist API request failed: ${response.status} ${response.statusText}`
    )
  }

  return response.json()
}

// Retrieve wildlife observations.
export async function getObservations({
  searchTerm = '',
  placeId = null,
  iconicTaxa = '',
  sortOrder = 'desc',
  perPage = 60,
  page = 1,
} = {}) {
  const safePerPage = Math.min(
    Math.max(Number(perPage) || 60, 1),
    200
  )

  const params = {
    photos: true,
    per_page: safePerPage,
    order_by: 'created_at',
    order: sortOrder,
    page,
  }

  if (iconicTaxa) {
    params['iconic_taxa[]'] = iconicTaxa
  }

  if (searchTerm.trim()) {
    params.q = searchTerm.trim()
  }

  if (placeId !== null) {
    params.place_id = placeId
  }

  const data = await apiRequest('/observations', params)

  return {
    totalResults: Number(data.total_results ?? 0),
    results: Array.isArray(data.results) ? data.results : [],
  }
}

// Retrieve one wildlife observation using its ID.
export async function getObservationById(observationId) {
  if (
    observationId === undefined ||
    observationId === null ||
    observationId === ''
  ) {
    throw new Error('An observation ID is required.')
  }

  const data = await apiRequest(
    `/observations/${encodeURIComponent(observationId)}`
  )

  return Array.isArray(data.results) ? data.results[0] ?? null : null
}
