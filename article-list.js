'use strict';

class ArticleList {

  constructor(container) {
    this.container = container;
    this.articles = [];
  }

  addArticle(article) {
    this.articles.push(article);
  }

  removeArticle(article) {
    this.container.removeChild(article);  
  }

  render(query) {

    if (query) {
      this.articles.forEach(article => {
        if (article.matches(query)) {
          const childContainer = document.createElement('div');
          childContainer.classList.add('child-container');
    
          const button = document.createElement('button');
          button.classList.add('button');
          button.textContent = 'x';
    
          button.addEventListener('click', event => {
            this.removeArticle(event.path[1]);
          })
    
          this.container.append(childContainer);
          Object.values(article).forEach(value => {
            const container = document.createElement('div');
    
            container.innerHTML = value;
            childContainer.append(container);
          })
          childContainer.append(button);
        }
      })
      
      this.articles.forEach(article => {
        const childContainer = document.createElement('div');
        childContainer.classList.add('child-container');
  
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = 'x';
  
        button.addEventListener('click', event => {
          this.removeArticle(event.path[1]);
        })
  
        this.container.append(childContainer);
        Object.values(article).forEach(value => {
          const container = document.createElement('div');
  
          container.innerHTML = value;
          childContainer.append(container);
        })
        childContainer.append(button);
      })
    }

    this.articles.forEach(article => {
      const childContainer = document.createElement('div');
      childContainer.classList.add('child-container');

      const button = document.createElement('button');
      button.classList.add('button');
      button.textContent = 'x';

      button.addEventListener('click', event => {
        this.removeArticle(event.path[1]);
      })

      this.container.append(childContainer);
      Object.values(article).forEach(value => {
        const container = document.createElement('div');

        container.innerHTML = value;
        childContainer.append(container);
      })
      childContainer.append(button);
    })

    document.body.append(this.container);
  }
}