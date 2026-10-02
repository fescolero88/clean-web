export function isTokenExpired(token, now = Date.now()) {
  if (!token || !token.access_token) return true
  const updatedAt = Number(token.updated_at)
  const lifetime = Number(token.expires_in)
  if (!Number.isFinite(updatedAt) || !Number.isFinite(lifetime) || lifetime <= 0) return true
  return now >= updatedAt + lifetime * 1000
}
