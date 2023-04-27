let dataObject = {}

async function fetchData(url) {
  const response = await fetch(url)
  const responseData = await response.json()
  return responseData
}

fetchData("./data/data.json")
  .then(data => console.log(data))
  .catch(err => console.log(err))
