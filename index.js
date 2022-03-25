var codFrases = document.getElementById('cod');

const request = new Request('https://pokeapi.co/api/v2/pokemon/');

fetch(request)
  .then(response => response.json())
  .then(function(pokeData){
      console.log(pokeData);
    (pokeData.results).forEach(result => {
        var codElement = document.createElement('div');
        codElement.setAttribute("class", "frase");

        var codTitulo = document.createElement('div');
        codTitulo.setAttribute("class", "titulo");
        codTitulo.innerText = result.name;

        var codContenido = document.createElement('div');
        codContenido.setAttribute("class", "contenido");
        codContenido.innerText = result.url;

        codElement.appendChild(codTitulo);
        codElement.appendChild(codContenido);
        codFrases.appendChild(codElement);
    });
  })
