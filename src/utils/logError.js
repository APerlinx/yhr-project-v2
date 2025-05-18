export function logError(context, error) {
  if (import.meta.env.DEV) {
    console.error(`[${context}]`, error)
  } else {
    // In production: do nothing, or log silently if needed later
  }
}
