export function supportRedirect(value, jwt, trustedUrl) {
  if (!value || !jwt || !trustedUrl) return null
  try {
    const target = new URL(value)
    const trusted = new URL(trustedUrl)
    if (target.protocol !== 'https:' || target.origin !== trusted.origin ||
        target.username || target.password || trusted.username || trusted.password) return null
    target.searchParams.set('jwt', jwt)
    return target.href
  } catch (error) {
    return null
  }
}

export function returnDestination(search) {
  return new URLSearchParams(search).get('return') || ''
}
