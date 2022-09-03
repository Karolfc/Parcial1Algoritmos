import * as components from './components/index.js';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile username="Diego Barillas" age="29" distance="19 km" description="Living without music is impossible"></my-profile>
        `
    }
}

class CounterContainer extends AppContainer {
    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/style.css">
        <section id="counterContainer">
            <my-counter2></my-counter2>
            <my-counter></my-counter>
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer);
customElements.define('counter-container', CounterContainer);