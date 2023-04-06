async function fetchData(setData) {
  const response = await fetch("data.json")
  const responseData = await response.json()
  setData(responseData)
}

export default fetchData
