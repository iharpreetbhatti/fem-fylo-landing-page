async function fetchData(url, setData) {
  const response = await fetch(url)
  const responseData = await response.json()
  setData(responseData)
}

export default fetchData
