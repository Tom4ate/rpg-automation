export default defineEventHandler(async (event) => {
  // Discord sends a GET request to verify the endpoint
  // Respond with 200 OK to confirm the URL is valid
  setResponseStatus(event, 200)
  return { message: 'Endpoint verified' }
})