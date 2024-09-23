export default class Accordion{
    constructor(element){
        this.element = element;

        this.init();
    }

    init(){
        this.number = 0; //compte le nombre de data-auto-open
        this.toggles = this.element.querySelectorAll('.js-header');
        for (let i = 0; i < this.toggles.length; i++) {
            const toggle = this.toggles[i]; 
            toggle.addEventListener('click', this.onHeader.bind(this)); //bind(this) avoir accès au variable globale, amène le contexte

            if(toggle.parentElement.dataset.autoOpen !== undefined){ //!== : si présent sur le parent
                toggle.parentElement.classList.add('is-active');
                this.number += 1; //augment le nombre de data-auto-open de 1
            }
        }
    }

    onHeader(event){ //event = le clique
        event.target.parentElement.classList.toggle('is-active'); //accordion__container ajoute ou enlève is-active
        for (let i = 0; i < this.toggles.length; i++) {
            const toggle = this.toggles[i];                 //data-not-closing           //nombre de data-open
            if(event.target != toggle && this.element.dataset.notClosing == undefined && this.number <= 1){ // si 0 n'est pas égale à 0
                toggle.parentElement.classList.remove('is-active'); //fermer
            }
        }
    }

}
