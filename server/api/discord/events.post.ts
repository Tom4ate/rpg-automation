export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Verify the request is from Discord (check signature if needed)
  // For now, process the event

  // Example: Log the event
  console.log('Received Discord event:', body)

  // Respond with 200 OK and empty body
  setResponseStatus(event, 200)
  return null
})