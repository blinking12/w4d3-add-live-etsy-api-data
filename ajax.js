// http://swapi.co/api/planets/1/

// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/')
// starwarsPlanets.send()
//
// var starwarsPlanets = new XMLHttpRequest()
// starwarsPlanets.addEventListener('load', planetListener)
// starwarsPlanets.open('GET', 'http://swapi.co/api/planets/?page=2')
// starwarsPlanets.send()

// function planetListener() {
//     var planets = JSON.parse(this.responseText)
//     // console.log(planets)
//     listPlanets(planets.results)
// }

// fetch('http://swapi.co/api/planets/1/')
// // .then(function(responseJson) {
// //     return response.json()
// // })
// .then(function(response.json())
// .then(response)

fetch('http://swapi.co/api/planets/')
    .then(response => response.json())  //boilerplate, will do this everytime
    .then(response => listPlanets(response.results))

    fetch('http://swapi.co/api/planets/1/')
        .then(response => response.json())  //boilerplate, will do this everytime
        .then(response => listPlanet(response))

function listPlanets(planetsArray) {
    console.log('This comes after the first one.')
    planetsArray.forEach(function(planet) {
        var planetTitle = document.createElement('h4')
        planetTitle.innerHTML = planet.name

        document.querySelector('body').appendChild(planetTitle)
    })
}

function listPlanet(planet) {
    var list = document.createElement('ul')
    var planetName = document.createElement('li')
    planetName.innerHTML = planet.name
    list.appendChild(planetName)
    var planetGravity = document.createElement('li')
    planetGravity.innerHTML = planet.gravity
    list.appendChild(planetGravity)
    var planetPopulation = document.createElement('li')
    planetPopulation.innerHTML = planet.population
    list.appendChild(planetPopulation)

    document.querySelector('body').appendChild(list)
}

// console.log('This comes first.')
