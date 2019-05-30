'use strict';

class Article {

  constructor(title, author, text) {
    this.title = title;
    this.author = author;
    this.text = text; 
  }

  matches(query) {
    const regExp = new regExp(query);
    const matchesAuthor = this.author.match(regExp);
    const matchesText = this.text.match(regExp);
    const matchesTitle = this.title.match(regExp);

    if (matchesAuthor.length > 0
      || matchesText.length > 0
      || matchesTitle.length > 0) {
      return true;
    }
    return false;
  }
}