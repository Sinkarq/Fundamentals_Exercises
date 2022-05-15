function addItem() {
    const newItemTextEl = document.querySelector(`#newItemText`);
    const newItemValueEl = document.querySelector(`#newItemValue`);
    const selectEl = document.querySelector(`select`);
    const optionEl = document.createElement('option');
    optionEl.setAttribute('value', newItemValueEl.value);
    optionEl.textContent = newItemTextEl.value;
    selectEl.appendChild(optionEl);


    newItemValueEl.value = null;
    newItemTextEl.value = null;
}