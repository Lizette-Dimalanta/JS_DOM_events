# Javascript DOM and Events

## Retrieve elements from DOM

### `.getElementById`

```javascript
const el = document.getElementById('title')
console.log(el)
el.innerHTML = 'Hello <span style="color:red">World!</span>'
    // Hello World! (world is in red)
```

### `.querySelector`

Returns first matched element.

```javascript
const el = document.querySelector('li')
console.log(el)
    // Adding to the DOM
```

### `.querySelectorAll`

Returns a node list (array) of specified element.

```javascript 
const el = document.querySelectorAll('li')
console.log(el)
    // NodeList(4) [li, li, li, li]```
```

### `.querySelectorAll`

Select specific matched element.

```javascript
const el = document.querySelectorAll('ul li') // ul li:nth-child(2)
console.log(el[2])
    // - Changing the DOM```
```

## Programmatically create new elements

---

### `.createElement`

```javascript
const newDiv = document.createElement('div')
console.log(newDiv) // <div> -> exists in memory/RAM (variable) but is not part of the DOM.
newDiv.innerHTML = '<h4> Div content </h4>'
document.body.appendChild(newDiv) // Adds div into DOM (end of <body>)
```

### `.createElement` -> `.querySelector`

```javascript
const newDiv = document.createElement('li')
console.log(newDiv)
newDiv.innerHTML = 'Div content' // `.innerText` = `.innerHTML`
document.querySelector('ul').appendChild(newDiv) // Adds div into DOM (end of <ul>)
document.body.appendChild(newDiv.cloneNode(true)) // Also add div to <body> -> clones into new object
    // Ideal for complex elements. Otherwise use..

    // SEMANTIC VERSION: querySelector
    document.querySelector('ul').innerHTML += '<li>Div Content</li>'
```

## NOTES

---

If an element is called from another parent, the element will move into it's most recent call (reparent).

    aka. a node can only have one parent.

**SHALLOW CLONES** -> `.cloneNode()`

`def`: Clones node but none of its children.

**DEEP COPY** -> `.cloneNode(true)`

`def`: Copies node including its children.

## Manipulating CSS Styling

Access to all CSS properties on an element:

```javascript
document.querySelector('h1').style.paddingLeft = '50px'
```

`.add`: Add class to an element:

```javascript
document.querySelector('h1').classList.add('foo')
```

`.remove`: Remove class from an element:

```javascript
document.querySelector('h1').classList.remove('foo')
```

`.toggle`: Adds class if it doesn't already exist, otherwise remove class: *(convenient for animating hamburger name)*.

```javascript
document.querySelector('h1').classList.toggle('foo')
```

## `script.js` - Adding items into a list

---

Create list items dynamically:

```javascript
const items = [
    'Adding to the DOM',
    'Querying the DOM',
    'Changing the DOM',
    'Dynamic generation',
    'Event Listeners'
]
```

`.join` item into list:

```javascript
const ul = document.querySelector('ul')

items.forEach(item => ul.innerHTML += `<li>${item}</li>`)
// OR
ul.innerHTML = items.map(item => `<li>${item}</li>`).join('') 
// Creates new array -> modifed version of original array (can be more efficient)

console.log('foo')
```

## Events

---

**Callback function:** A function passed into another function as an argument, which is then called back in the outer function.

Add Event listener:

```javascript
const btn = document.querySelector('button')
const input = document.querySelector('input')

btn.addEventListener('click', event => {
    event.preventDefault()
    ul.innerHTML += `<li>${input.value}</li>`
    input.value = ''
    input.focus() // Keeps cursor position in input field after submission
    
    // event.target.innerText += '!'
    // event.target.classList.toggle('foo')
    // Remove rocket operator (replace with function) to stop event listener
})
```