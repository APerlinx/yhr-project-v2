const { v2: cloudinary } = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.handler = async function (event, context) {
  try {
    // Read query params: e.g. /cloudinary?tag=myTag
    const { tag } = event.queryStringParameters

    // Fetch images based on tag, or show all thumbnails
    let resources
    if (tag) {
      // Fetch all images with the given tag
      const result = await cloudinary.api.resources_by_tag(tag, {
        max_results: 30,
      })
      resources = result.resources
    } else {
      // Fetch all images with the 'thumbnail' tag (default)
      const result = await cloudinary.api.resources_by_tag('thumbnail', {
        max_results: 30,
        context: true,
      })
      resources = result.resources
    }

    // Format resources like in your frontend
    const formatted = resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      residential: resource.context?.custom?.residential === 'true',
      desc: resource.context?.custom?.desc,
    }))

    return {
      statusCode: 200,
      body: JSON.stringify(formatted),
      headers: { 'Access-Control-Allow-Origin': '*' },
    }
  } catch (err) {
    console.error('Function error:', err)

    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message, stack: err.stack }),
    }
  }
}
