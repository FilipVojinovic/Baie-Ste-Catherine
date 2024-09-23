// importer vos composantes ici
import YouTube from './components/YouTube';
import Scrolly from './components/Scrolly';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Accordion from './components/Accordion';
import Form from './components/Form';

export default class ComponentFactory {
  constructor() {
    this.componentInstances = [];
    this.componentList = {
      // Mettez votre liste de composantes ici
      Form,
      Carousel,
      Scrolly,
      Header,
      YouTube,
      Accordion,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        const instance = new this.componentList[componentName](element);
        this.componentInstances.push(instance);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }
  }
}
