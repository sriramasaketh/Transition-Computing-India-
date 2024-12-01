const API_URL = 'https://jsonplaceholder.typicode.com'

export const fetchData = async endpoint => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Fetch error:', error)
    return null
  }
}
