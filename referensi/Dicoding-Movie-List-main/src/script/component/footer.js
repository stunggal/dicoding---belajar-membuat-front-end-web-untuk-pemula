class Footer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <footer class="bg-light text-center text-sm-start">

            <div class="text-center p-3" style="background-color: #787A91">
            © 2020 TidakCopyright : Reynaldo Wawan
            </div>

        </footer>
        `;
    }    
}

customElements.define("footer", Footer);