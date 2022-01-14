const storiesList= document.getElementById("storiesList")

async function myPromiseAll (array) {
    const resultArray = []
    for(let index = 0; index < array.length; index ++) {
        try {
            const data = await array[index];
            resultArray.push(data);
        } catch (event) {
            throw event;
        }
    }
    return resultArray;
}


function getStoryIds() {
    const storyIdURL= `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`

    fetch(storyIdURL, {
        method:'GET',
        headers:{
            'Content-Type' : 'applicantion/json'
        }
    }).then(response => {
        return response.json()
        
    }).then(result => {
       getStories(result)
    })
}

getStoryIds()

async function getStories(ids) {
    
    // Promise.all([promise1, promise2, etc])
    
     Promise.all(ids.map(async id => {
        const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        return await res.json();
    }))
     .then(response => displayStories(response) )
}

function displayStories(storyData) {
console.log('STORY DATA', storyData);

storyData.map( article => {
    const {
       title: title,
       url: url,
       by: by,
       time: time
    } = article;

    const date = new Date(time*1000)

    const storyItem = `
        <div id="article">
            <h4>${title}</h4>
            <small>Author: ${by}</small>
            <small>${date}</small>
            <a href=${url}>${url}</a>
        </div>
    `
    storiesList.insertAdjacentHTML("beforeend", storyItem)
})
}