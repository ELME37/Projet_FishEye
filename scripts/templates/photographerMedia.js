export default class PhotographerMedia {
    constructor(photographer, media) {
        this.photographer = photographer;
        this.media = media;
    };

    createPhotographerMedia() {
        const article = document.createElement( 'article' );
        article.classList.add('photographer__media')
        const photographerMedia = `
        `;
         article.innerHTML = photographerMedia;
    return article;
    };
};