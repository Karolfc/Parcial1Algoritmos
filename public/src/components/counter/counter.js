class MyCounter extends HTMLElement {
    static get observedAttributes() {
      return ["count"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
  
    connectedCallback() {
      console.log("mounted");
      this.mount();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }
  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
          <section class="likeCounter">
          <link rel="stylesheet" href="./src/components/profile/style.css">
            <img id="likeCounter" src="./imagenes/like.png">
            <p id="numeroLike">${this.count || 0}</p>
          </section>

          `;
    }
  
    removeEventListeners() {
      this.shadowRoot.querySelector("img").removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
  }

  class MyCounter2 extends HTMLElement {
    static get observedAttributes() {
      return ["count"];
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      console.log("changed");
      this[propName] = newValue;
      this.mount();
    }
  
    connectedCallback() {
      console.log("mounted");
      this.mount();
    }
  
    dissconnectedCallback() {
      console.log("unmounted");
      this.removeEventListeners();
    }
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.onButtonClicked = this.onButtonClicked.bind(this);
    }
  
    mount() {
      this.render();
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }
  
    render() {
      console.log("render");
      this.shadowRoot.innerHTML = `
          <section class="dislikeCounter">
          <link rel="stylesheet" href="./src/components/profile/style.css">
            <img id="likeCounter" src="./imagenes/equis.png">
            <p id="numeroLike">${this.count || 0}</p>
          </section>

          `;
    }
  
    removeEventListeners() {
      this.shadowRoot.querySelector("img").removeEventListener("click", this.onButtonClicked);
    }
  
    onButtonClicked() {
      console.log("clicked");
      const currentValue = Number(this.getAttribute("count")) || 0;
      this.setAttribute("count", currentValue + 1);
    }
  }


  customElements.define("my-counter", MyCounter);
  customElements.define("my-counter2", MyCounter2);
  export default MyCounter; MyCounter2;