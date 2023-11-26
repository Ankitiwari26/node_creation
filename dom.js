console.log("hello world");

var itemList = document.querySelector('#items');

// parentNode
console.log("Parent Node:", itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log("Grandparent Node:", itemList.parentNode.parentNode.parentNode);

// parentElement
console.log("Parent Element:", itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log("Grandparent Element:", itemList.parentElement.parentElement.parentElement);

// lastElementChild
console.log("Last Element Child:", itemList.lastElementChild);
itemList.lastElementChild.style.color = 'blue';

// lastChild
console.log("Last Child:", itemList.lastChild);

// firstElementChild
console.log("First Element Child:", itemList.firstElementChild);
itemList.firstElementChild.style.color = 'green';

// firstChild
console.log("First Child:", itemList.firstChild);

// nextSibling
console.log("Next Sibling:", itemList.nextSibling);

// nextElementSibling
console.log("Next Element Sibling:", itemList.nextElementSibling);
if (itemList.nextElementSibling) {
  itemList.nextElementSibling.style.border = '2px solid red';
}

// previousSibling
console.log("Previous Sibling:", itemList.previousSibling);

// previousElementSibling
console.log("Previous Element Sibling:", itemList.previousElementSibling);
if (itemList.previousElementSibling) {
  itemList.previousElementSibling.style.border = '2px solid orange';
}

// createElement and setAttribute
var newListItem = document.createElement('li');
newListItem.textContent = 'New Item';
newListItem.setAttribute('class', 'list-group-item');

// createTextNode and appendChild
var newText = document.createTextNode('Another New Item');
var newListItem2 = document.createElement('li');
newListItem2.appendChild(newText);

// appendChild
itemList.appendChild(newListItem);
itemList.appendChild(newListItem2);

console.log("Updated Item List:", itemList);
