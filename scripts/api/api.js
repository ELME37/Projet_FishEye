export default class Api {
    constructor(url){
        this.url = url;
    }
    async get(){
        return fetch(this.url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                throw new Error(error);
            });
    }
};