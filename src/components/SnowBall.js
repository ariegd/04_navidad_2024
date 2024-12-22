class SnowBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
            
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${SnowBall.styles}</style>
        <div>
        </div>
        `;
    }
}

customElements.define("snow-ball", SnowBall);