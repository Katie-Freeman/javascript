const superHeroMovies = document.getElementById("superHeroMovies")
const movieDetails = document.getElementById("movieDetails")
const posterContainer = document.getElementById("posterContainer")
const detailsContainer = document.getElementById("detailsContainer")


function getMovieInfo(movieInfoFethced) {

    let infoRequest = new XMLHttpRequest()
    
    infoRequest.onload = function() {
       const movieInfo = JSON.parse(this.responseText)
       movieInfoFethced(movieInfo)
    }
    infoRequest.onreadystatechange = function(){
        console.log(this.readyState)
    if(this.readyState == XMLHttpRequest.DONE) {
        if(this.status == 200){
            console.log(this.responseText)
        }
    }
}

    infoRequest.open("GET", "https://www.omdbapi.com/?s=batman&apikey=265ae3d8")
    infoRequest.send()

}

function displayMovieInfo(movieInfo) {
    let movieInfoItems = movieInfo.Search.map((item) => {
        return `
        <div>
        <img class="moviePoster" src=${item.Poster}/>
       <a onclick="getMovieDetails('${item.imdbID}')" class="movieTitle" href="#">
       <h3>${item.Title}</h3></a>
       </div>
        `
    })
    superHeroMovies.innerHTML = movieInfoItems.join("")

}

function getMovieDetails(id) {

    let detailsRequest = new XMLHttpRequest();
    
    detailsRequest.onload = function() {
        console.log(this.responseText)
        const movieDetails = JSON.parse(this.responseText)
        displayMovieDetails(movieDetails)
    }
    detailsRequest.onreadystatechange = function() {
        console.log(this.readyState)

        if(this.readyState == XMLHttpRequest.DONE) {
            if(this.status == 200){
                console.log(this.responseText)
            }
        }
    }
    detailsRequest.open("GET", `https://omdbapi.com/?i=${id}&apikey=265ae3d8`)
    detailsRequest.send()
    console.log('Displaying movie details...')

}

function displayMovieDetails(details) {
    const poster = `<img src=${details.Poster} />`

    const detailText = `
    <h3> Year: ${details.Year}</h3>
    <h3> Rated: ${details.Rated}</h3>
    <h3> Release: ${details.Released}</h3>
    <h3> Director: ${details.Director}</h3>
    `

    posterContainer.innerHTML = poster
    detailsContainer.innerHTML = detailText
}

getMovieInfo((movieInfo) => {
    displayMovieInfo(movieInfo)
})