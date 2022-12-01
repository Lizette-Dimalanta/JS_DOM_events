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

## **NOTES**

If an element is called from another parent, the element will move into it's most recent call (reparent).

    aka. a node can only have one parent.

**SHALLOW CLONES** -> `.cloneNode()`

`def`: Clones node but none of its children.

**DEEP COPY** -> `.cloneNode(true)`

`def`: Copies node including its children.