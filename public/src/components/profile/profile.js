class MyProfile extends HTMLElement {
    static get observedAttributes(){
        return['username', 'age', 'distance', 'description'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <link href="./src/components/profile/style.css" rel="stylesheet">
            <section>
                <h1 id="username">${this.username}, ${this.age}</h1>
                <p id="distance">${this.distance}</p>
                <h3 id="description">${this.description}</h3>
            </section>
        `;
    }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;