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
                --transparent-color: #fff2;

                border: 10px solid var(--transparent-color);
                width: var(--size);
                height: var(--size);
                border-radius: 50%;
                /* background: #fff6; */
                background-color: var(--transparent-color);
                /* background-image:linear-gradient(transparent 70%, #ebf0f3 70%); */
                display: grid;
                align-items: end;
                overflow: hidden;
                position: relative;

                &::after {
                    content: "";
                    display: block;
                   /*  background: transparent; */
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    border-right: 25px solid #0004;
                    box-sizing: border-box;
                    border-radius: 50%;
                    transform: rotate(35def);
                }
            }

            .snow-container {
                --snow-size: calc(var(--size) * 0.25);

                display: grid;
                justify-items: center;
                height: var(--snow-size);
                transform-origin: 50% 100%;
                transition: transform 0.5s;

             /*    &:hover {
                    transform: translate(70px, 0) rotate(-15deg);
                    transform: translate(-70px, 0) rotate(15deg);
                } */

                & .surface-snow {
                    --surface-height: 30px;
                    --offset-y: calc(calc(var(--surface-height)/2) * -1);

                    width: 87%;
                    height: var(--surface-height);
                    border-radius: 50%;
                    background: #cccccc;
                    position: absolute;
                    /* transform: translateY(-15px); */
                    transform: translateY(var(--offset-y));
                }

                & .snow {
                    width: 100%;
                    height: 100%;
                    background: #fff;
                }
                
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
            <div class="snow-container">
                <div class="surface-snow"></div>
                <div class="snow"></div>
            </div>
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