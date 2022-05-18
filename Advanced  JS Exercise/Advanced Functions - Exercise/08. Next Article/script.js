function getArticleGenerator(articles) {
    let arr = articles;

    return () => {
        const divContentEl = document.querySelector('#content');

        if (arr.length != 0) {
            let sentence = arr.shift();
            const article = document.createElement('article');
            article.innerText = sentence;

            divContentEl.appendChild(article);
        }
    }
}
