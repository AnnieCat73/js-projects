const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  id: '132',
}

const { url, type, id } = apiData

const apiUrl = `${url}${type}/${id}` //or const apiUrl = `${apiData.url}${apiData.type}${apiData.id}`
//console.log(apiUrl) ////https://pokeapi.co/api/v2/pokemon/25

fetch(apiUrl)
  .then((data) => {
    if (data.ok) {
      return data.json()
    }
    throw new Error('Response not ok.');
  })
  .then(pokemon => generateHtml(pokemon))
  .catch(error => console.error('Error:', error))


const generateHtml = (data) => {
  //console.log(data)
  const html = `
    <div class="name">${data.name}</div>
    <img src=${data.sprites.front_default}>
    <div class="details">
        <span>Height: ${data.height}</span>
        <span>Weight: ${data.weight}</span>
    </div>
  `
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html
}