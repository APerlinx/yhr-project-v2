import dataJSON from '../../data/dataJSON.json';
import Projects from '../../data/Projects.json';

const CLOUD_NAME = 'dayojijed';
const API_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list`;

export async function fetchPreviewProjects() {
  try {
    let data;

    if (process.env.NODE_ENV === 'development') {
      data = dataJSON;
      // JSON file should contain the latest from : https://res.cloudinary.com/dayojijed/image/list/thumbnail.json
    } else {
      const response = await fetch(`${API_BASE_URL}/thumbnail.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch project images from Cloudinary.');
      }
      data = await response.json();
    }

    return data.resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      residential: resource.context?.custom?.residential === 'true',
      desc: resource.context?.custom?.desc,
    }));
  } catch (error) {
    console.error('Error fetching preview projects:', error);
    return [];
  }
}

export async function fetchSingleProject(projectTag) {
  if (!projectTag) {
    throw new Error('No projectTag provided for fetchSingleProject');
  }
  try {
    let data;

    if (process.env.NODE_ENV === 'development') {
      data = {
        resources: Projects.resources.filter(
          (resource) => resource.public_id.split('_')[0] === projectTag
        ),
      };
    } else {
      const response = await fetch(`${API_BASE_URL}/${projectTag}.json`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch project images for ${projectTag} from Cloudinary.`
        );
      }

      data = await response.json();
    }

    return data.resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      residential: resource.context?.custom?.residential === 'true',
      desc: resource.context?.custom?.desc,
    }));
  } catch (error) {
    console.error(`Error fetching data for ${projectTag}:`, error);
    return [];
  }
}
