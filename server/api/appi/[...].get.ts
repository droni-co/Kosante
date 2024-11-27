export default defineEventHandler(async (event) => {
  const endpoint = String(event.node.req.url).replace('/api/appi', '')
  
  const res = await $fetch(`${process.env.APPI}/sites/${process.env.APPI_SITE_ID}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res
})