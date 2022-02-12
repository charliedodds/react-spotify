export const CLIENT_ID = '512fac2b33c648d4a8b63e6cc3257e80'
export const RESPONSE_TYPE = 'token'
export const REDIRECT_URI = 'http://localhost:3000'
export const SCOPE = 'user-read-recently-played'
export const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize'
export const FULL_SPOTIFY_URL = `${SPOTIFY_AUTH_URL}?response_type=${RESPONSE_TYPE}&client_id=${encodeURIComponent(
  CLIENT_ID
)}&scope=${encodeURIComponent(SCOPE)}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}`
