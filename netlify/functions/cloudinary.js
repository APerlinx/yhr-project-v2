const { v2: cloudinary } = require('cloudinary')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.handler = async function (event, context) {
  try {
    const { tag } = event.queryStringParameters

    let resources
    if (tag) {
      const result = await cloudinary.api.resources_by_tag(tag, {
        max_results: 30,
        context: true,
      })
      resources = result.resources
    } else {
      const result = await cloudinary.api.resources_by_tag('thumbnail', {
        max_results: 30,
        context: true,
      })
      resources = result.resources
    }

    const formatted = resources.map((resource) => ({
      id: resource.public_id,
      imageUrl: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${resource.public_id}.${resource.format}`,
      residential: resource.context?.custom?.residential === 'true',
      desc: resource.context?.custom?.desc,
      code: resource.context?.custom?.code,
      title: resource.context?.custom?.title,
    }))

    return {
      statusCode: 200,
      body: JSON.stringify(formatted),
      headers: { 'Access-Control-Allow-Origin': '*' },
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    }
  }
}
