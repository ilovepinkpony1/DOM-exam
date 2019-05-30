'use strict';

document.addEventListener('DOMContentLoaded', () => {
const container = document.getElementById('article-list');
const input = document.querySelector('input');
let inputVal = '';
input.addEventListener('change', event => {
  inputVal = event.value;
})

  function findArticles() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ' http://my-json-server.typicode.com/mate-academy/literary-blog/articles', false);
    xhr.send();
    try {
      const articles = JSON.parse(xhr.responseText);
      return articles;
    } catch(e) {
      console.log(e);
    }
  }
  

  const articles = findArticles();
  const articlesList = new ArticleList(container);
  articles.forEach(element => {
    const article = new Article(element.title,element.author, element.text)
    articlesList.addArticle(article);
  });
  articlesList.render();
});