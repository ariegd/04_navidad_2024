class SnowBall extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    static get styles() {
        return /* css */`
            :host {
            }

            .container {
                --size: 500px;

                border: 1px solid #fff;
                width: var(--size);
                height: var(--size);
                border-radius: 50%;
            }
            
        
        `;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <style>${SnowBall.styles}</style>
        <div class="container">
        </div>
        <h2>HTML Forms</h2>

        <form action="/action_page.php">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
        </form> 
        `;
    }
}

customElements.define("snow-ball", SnowBall);