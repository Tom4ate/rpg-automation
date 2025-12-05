export default defineEventHandler(async (event) => {
  const interactionId = getRouterParam(event, 'interactionId')
  const interactionToken = getRouterParam(event, 'interactionToken')

  if (!interactionId || !interactionToken) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing interaction ID or token'
    })
  }

  const body = await readBody(event)

  try {
    const response = await $fetch(`https://discord.com/api/v10/interactions/${interactionId}/${interactionToken}/callback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    // For HTTP interactions, respond with 202 and no body
    setResponseStatus(event, 202)
    return null
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send interaction callback'
    })
  }
})