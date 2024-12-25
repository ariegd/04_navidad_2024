class SnowMan extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
                --snowman-width: var(--size) * 0.3;
                --snowman-height: var(--size) * 0.8;
            }

            .container {
                --size: 500px;

                background: red;
                width: calc(var(--snowman-width));
                height: calc(var(--snowman-height));
            }
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${SnowMan.styles}</style>
        <div class="container">
        </div>
        `;
    }
}

customElements.define("snow-man", SnowMan);