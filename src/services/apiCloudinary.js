import { logError } from '../utils/logError'

export async function fetchPreviewProjects() {
  try {
    const response = await fetch('/.netlify/functions/cloudinary')
    if (!response.ok) {
      throw new Error('Cloudinary returned non-200 response')
    }
    const data = await response.json()
    return data
  } catch (error) {
    logError('fetchPreviewProjects', error)
    return []
  }
}

export async function fetchSingleProject(projectTag) {
  if (!projectTag) {
    logError('fetchSingleProject', new Error('Missing projectTag'))
    return []
  }
  try {
    const response = await fetch(
      `/.netlify/functions/cloudinary?tag=${encodeURIComponent(projectTag)}`
    )
    if (!response.ok) {
      throw new Error(`Cloudinary failed for tag: ${projectTag}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    logError(`fetchSingleProject: ${projectTag}`, error)
    return []
  }
}
