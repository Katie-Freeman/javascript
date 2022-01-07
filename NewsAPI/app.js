const headlines = document.getElementById("headlines")
const sourceSelect = document.getElementById("sourceSelect")
const articles = news.articles

let sourceMap = {All:1}

news.articles.forEach(article => {
    sourceMap[article.source.name] = sourceMap[article.source.name] + 1 || 1
})


const sourcesList = Object.keys(sourceMap).map(function (source){
     return `<option>${source}</option>`
 })

 sourceSelect.innerHTML = sourcesList.join("")
 sourceSelect.insertAdjacentHTML('beforeend', sourcesList.join(""))

function displayArticles(articles){
let newsList = articles.map(function (story){
    return `<li>
    
    <h3>${story.title}</h3>
    ${story.urlToImage ? `<img src=${story.urlToImage} class="newsPic" />` : ''}
    ${story.description ? `<p>${story.description}</p>` : ''}
    <a href = ${story.url} class = "link">Click Here to read more<a>
    ${story.author ? `<p>${story.author}</p>` : ''}
    <p>${story.publishedAt}</p>
    `
})
 newsList.innerHTML = newsList.join("")

 headlines.innerHTML= newsList.join("")
}

sourceSelect.addEventListener("change", function () {
    const selectedSource = this.value
  
    if(selectedSource == "All") {
      displayArticles(articles)
    } else {
  
      const filteredArticles = articles.filter(function(article) {
        return article.source.name == selectedSource
      })
  
      displayArticles(filteredArticles)
  
    }
  
  })
  
displayArticles(articles)

//  need to remove Null Author, description and image