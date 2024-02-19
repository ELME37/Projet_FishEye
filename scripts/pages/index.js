    import Api from "../api/api.js";
    import Photographer from "../models/photographer.js";
    import PhotographerCard from "../templates/photographerCard.js";
   
    const photographer_section = document.querySelector('.photographer_section')
    const photographer_api = new Api("./data/photographers.json");
    
    
    
    const displayPhotographers = async () => {
        const photographersData = await photographer_api.get();
        const photographers = photographersData.photographers;
    
        photographers
            .map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const template = new PhotographerCard(photographer);
                const photographerCard = template.createPhotographerCard();
                photographer_section.appendChild(photographerCard);
            });
    };
    
    displayPhotographers();

    
