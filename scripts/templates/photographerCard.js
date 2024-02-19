export default class PhotographerCard {
    constructor(photographer){
        this.photographer = photographer;
    }

    createPhotographerCard() {
        const article = document.createElement( 'article' );
        article.classList.add('photographer__card')
        const photographerCard = `
            <a class="photographer__card--link" href="./photographer.html?id=${this.photographer.id}" aria-label="Page du photographe : ${this.photographer.name}">         
                <img class="photographer__card--img" src="./assets/photographers/Photographers/${this.photographer.portrait}" alt=" Photographe : ${this.photographer.name}"/>
                <h2 class="photographer__card--name">${this.photographer.name}</h2>
            </a>
            <div class="photographer__card--description">
                <p class="photographer__description--city">${this.photographer.city}, ${this.photographer.country}</p>
                <p class="photographer__description--tagline">${this.photographer.tagline}</p>
                <p class="photographer__description--price">${this.photographer.price}€/jour</p>
            </div>`;
        article.innerHTML = photographerCard;
    return article;
    }
}