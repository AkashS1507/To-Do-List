let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener('click', () => {
    let ul = document.querySelector('ul');
    let item = document.createElement('li');

    // Create and append checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    item.appendChild(checkbox);

    // Create and append paragraph
    let paragraph = document.createElement('p');
    paragraph.innerText = inp.value;
    item.appendChild(paragraph);

    // Create and append icon
    let icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    item.appendChild(icon);

    // Append the new item to the list
    ul.appendChild(item);

    // Clear the input field
    inp.value = '';
});

ul.addEventListener("click" , (event) => {
    if(event.target.nodeName == "I"){
        let listItem = event.target.parentElement; // X icon's parent is "li"
        listItem.remove();
    }
});