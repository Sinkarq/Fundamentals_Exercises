function solve() {
    const generateButton = document.querySelector('button');
    const tableBody = document.querySelector('tbody');
    generateButton.addEventListener('click', () => {
        fillTable();
    });

    const buyButton = document.querySelectorAll('button')[1];
    buyButton.addEventListener('click', () => {
        let products = [];
        const selectedProducts = document.querySelectorAll('input:checked');
        for (const selectedProduct of selectedProducts) {
            let productTrEl = selectedProduct.parentNode.parentNode;
            const tdEls = productTrEl.querySelectorAll('td');
            products.push({
               name: tdEls[1].textContent,
               price: Number(tdEls[2].textContent),
               decorationFactor: Number(tdEls[3].textContent),
            });
        }
        const prices = products.map(x => x.price);
        const totalPrice = prices.reduce((previousValue, currentValue) => previousValue + currentValue);

        const names = products.map(x => x.name);

        const decorationFactors = products.map(x => x.decorationFactor);
        const averageDecoration = (decorationFactors.reduce((previousValue, currentValue) => previousValue + currentValue)) / names.length;
        const outputTextAreaEl = document.querySelector('textarea:last-of-type');
        outputTextAreaEl.textContent = `Bought furniture: ${names.join(`, `)}`;
        outputTextAreaEl.textContent += `\nTotal price: ${totalPrice.toFixed(2)}`;
        outputTextAreaEl.textContent += `\nAverage decoration factor: ${averageDecoration}`;
    });

    function fillTable() {
        const inputEl = document.querySelector('textarea');
        const products = JSON.parse(inputEl.value);
        console.log(products);
        for (const product of products) {
            const productTableRow = document.createElement('tr');
            productTableRow.appendChild(createProductPictureTd(product[`img`]));
            productTableRow.appendChild(createProductTableData(product[`name`]));
            productTableRow.appendChild(createProductTableData(product[`price`]));
            productTableRow.appendChild(createProductTableData(product[`decFactor`]));
            productTableRow.appendChild(createProductCheckBox());

            tableBody.appendChild(productTableRow);
        }
    }

    function createProductPictureTd(link) {
        const pictureTd = document.createElement('td');
        const imgEl = document.createElement('img');

        imgEl.setAttribute('src', link);
        pictureTd.appendChild(imgEl);

        return pictureTd;
    }

    function createProductTableData(text) {
        const tdEl = document.createElement('td');
        const paragraphEl = document.createElement('p');
        paragraphEl.textContent = text;
        tdEl.appendChild(paragraphEl);
        return tdEl;
    }

    function createProductCheckBox() {
        const tdEl = document.createElement('td');

        const checkBoxEl = document.createElement('input');
        checkBoxEl.setAttribute('type', 'checkbox');

        tdEl.appendChild(checkBoxEl);

        return tdEl;
    }
}

/*
[
    {
        "name":"Tablet",
        "img":"https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg",
        "price":2000,
        "decFactor":5.2
    },
    {
        "name":"Vase",
        "img":"https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg",
        "price":15,
        "decFactor":10
    }
]*/