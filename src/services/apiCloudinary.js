import { logError } from '../utils/logError'

const CLOUD_NAME = 'dayojijed'
const API_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list`

export async function fetchPreviewProjects() {
  try {
    const response = await fetch(`${API_BASE_URL}/thumbnail.json`)
    if (!response.ok) {
      throw new Error('Cloudinary returned non-200 response')
    }
    const data = await response.json()

    return data.resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      residential: resource.context?.custom?.residential === 'true',
      desc: resource.context?.custom?.desc,
    }))
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
    const response = await fetch(`${API_BASE_URL}/${projectTag}.json`)
    if (!response.ok) {
      throw new Error(`Cloudinary failed for tag: ${projectTag}`)
    }

    const data = await response.json()

    return data.resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      residential: resource.context?.custom?.residential === 'true',
      desc: resource.context?.custom?.desc,
    }))
  } catch (error) {
    logError(`fetchSingleProject: ${projectTag}`, error)
    return []
  }
}
