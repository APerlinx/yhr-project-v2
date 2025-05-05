import dataJSON from '../../data/dataJSON.json';
import dataAllJSON from '../../data/dataAllJSON.json';

const CLOUD_NAME = 'dayojijed';
const API_BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/list`;

export async function fetchPreviewProjects() {
  try {
    let data;

    if (process.env.NODE_ENV === 'development') {
      data = dataJSON;
      // JSON file should contain the latest from : https://res.cloudinary.com/dayojijed/image/list/preview.json
    } else {
      const response = await fetch(`${API_BASE_URL}/preview.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch project images from Cloudinary.');
      }
      data = await response.json();
    }

    return data.resources
      .map((resource) => ({
        id: resource.public_id,
        imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
        projectName:
          resource.context?.custom?.project_name || 'Unknown Project',
        caption: resource.context?.custom?.caption || 'Untitled Project',
        description: resource.context?.custom?.description || '',
        year: resource.context?.custom?.year || '-',
        location: resource.context?.custom?.location || '',
        isLast: resource.context?.custom?.last === 'true',
        projectType: resource.context?.custom?.project_type || 'general',
      }))
      .sort((a, b) => {
        if (a.isLast && !b.isLast) return 1;
        if (!a.isLast && b.isLast) return -1;

        const projectNumberA = parseInt(
          a.projectName.match(/project(\d+)/i)?.[1] || 0,
          10
        );
        const projectNumberB = parseInt(
          b.projectName.match(/project(\d+)/i)?.[1] || 0,
          10
        );

        return projectNumberA - projectNumberB;
      });
  } catch (error) {
    console.error('Error fetching preview projects:', error);
    return [];
  }
}

export async function fetchSingleProject(projectName) {
  if (!projectName) {
    throw new Error('No projectName provided for fetchSingleProject');
  }
  try {
    let data;

    if (process.env.NODE_ENV === 'development') {
      data = {
        resources: dataAllJSON.resources.filter(
          (resource) => resource.context?.custom?.project_name === projectName
        ),
      };
    } else {
      const response = await fetch(`${API_BASE_URL}/${projectName}.json`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch project images for ${projectName} from Cloudinary.`
        );
      }

      data = await response.json();
    }

    return data.resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      caption: resource.context?.custom?.caption || '',
      alt: resource.context?.custom?.alt || '', // Add the alt property
      description: resource.context?.custom?.description || '',
      location: resource.context?.custom?.location || '',
      year: resource.context?.custom?.year || '-',
      projectType: resource.context?.custom?.project_type || 'general',
      projectTypeHEB: resource.context?.custom?.project_typeHEB || '-',
      locationHEB: resource.context?.custom?.locationHEB || '-',
      nextProject: resource.context.custom?.next_project || '',
      prevProject: resource.context.custom?.prev_project || '',
    }));
  } catch (error) {
    console.error(`Error fetching data for ${projectName}:`, error);
    return [];
  }
}
