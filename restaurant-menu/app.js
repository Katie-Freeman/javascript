const menu = document.getElementById("menu")
let starters = dishes.filter((dish) => dish.course === 'Starters')
let entrees = dishes.filter((dish) => dish.course === 'Entrees')
let desserts = dishes.filter((dish) => dish.course === 'Desserts')
let dropDown = document.getElementsByClassName("dropdown")[0]
let allCourses = {starters, entrees, desserts};

const contentDiv = document.getElementById("contentDiv")

let dishList = dishes.map(function (dish){
    return `<li>
    <h3>${dish.title}</h3>
    <p>${dish.description}</p>
    <p>$${dish.price}</p>
    <img width=200 src=${dish.imageURL} />
    `
})
 dishList.innerHTML = dishList.join("")



menu.insertAdjacentHTML('beforeend', dishList.join(""))

dropDown.addEventListener("click", function(e) {
    console.log('EVENT TARGET', e.target)
    let clickedLink = e.target.id;
    let selection = dishes;
    
    if(clickedLink === "starters") {
        selection = starters
    } else if (clickedLink === "entrees") {
        selection = entrees;
    } else if (clickedLink === "desserts") {
        selection = desserts;
    } else {
        selection = dishes;
    }    

    let selectionList = selection.map( function (dish) {
        return `<li>
        <h3>${dish.title}</h3>
        <p>${dish.description}</p>
        <p>$${dish.price}</p>
        <img width=200 src=${dish.imageURL} />
        `
    })


    selectionList.innerHTML = selectionList.join(" ")
    console.log('SELECTION LIST', selectionList)


    menu.innerHTML = selectionList.join("");
})




// document.addEventListener("change", function(e) {
//     if (e.target.id === "coursePicker") {
//         console.log('select option changed', e.target.value);
//         courses = Object.entries(allCourses).filter((key, value) => key[0] === e.target.value.toLowerCase() )[0][1]

//         console.log(courses);
// const selectedDishes = courses.map(function (dish){
//     return `<li>
//     <h3>${dish.title}</h3>
//     <p>${dish.description}</p>
//     <p>${dish.price}</p>
//     <img src=${dish.imgURL}/>
//     `

// dishList.innerHTML =dishList.join("")
// console.log(selectedDishes)

// menu.insertAdjacentHTML('beforeend', selectedDishes)
// })

//     }
// })

// const starterList = starters.map(function (starters){
//     return `<li>
//     <h3>${dish.title}</h3>
//     <p>${dish.description}</p>
//     <p>${dish.price}</p>
//     <img src=${dish.imgURL}/>
//     `
// })

// dishList.innerHTML = dishList.join(" ")
// console.log(dishList)

