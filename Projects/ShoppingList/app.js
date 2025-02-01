const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const product = form.elements.product.value;
    const qty = form.elements.qty.value;
    const newElement = document.createElement('LI');
    newElement.innerText = `${qty} ${product}`;
    list.appendChild(newElement);
    qty.value = "";
    product.value = "";

    list.addEventListener('click', function(evt) {
        const targetElement = evt.target;
        targetElement.remove()
    })
});