// RETRIEVE ELEMENTS FROM DOM

// .getElementById
// const el = document.getElementById('title')
// console.log(el)
// el.innerHTML = 'Hello <span style="color:red">World!</span>'
    // Hello World! (world is in red)

//.querySelector -> Returns first matched element 
// const el = document.querySelector('li')
// console.log(el)
    // Adding to the DOM

// .querySelectorAll -> Returns a node list (array) of specified element
// const el = document.querySelectorAll('li')
// console.log(el)
    // NodeList(4) [li, li, li, li]

// .querySelectorAll -> select specific matched element
// const el = document.querySelectorAll('ul li') // ul li:nth-child(2)
// console.log(el[2])
    // - Changing the DOM

// PROGRAMMATICALLY CREATE NEW ELEMENTS

// .createElement
// const newDiv = document.createElement('div')
// console.log(newDiv) // <div> -> exists in memory/RAM (variable) but is not part of the DOM.
// newDiv.innerHTML = '<h4> Div content </h4>'
// document.body.appendChild(newDiv) // Adds div into DOM (end of <body>)

// .createElement -> querySelector
const newDiv = document.createElement('li')
console.log(newDiv)
newDiv.innerHTML = 'Div content' // `.innerText` = `.innerHTML`
document.querySelector('ul').appendChild(newDiv) // Adds div into DOM (end of <ul>)
    // Ideal for complex elements. Otherwise use..

    // SEMANTIC VERSION: querySelector
    // document.querySelector('ul').innerHTML += '<li>Div Content</li>'