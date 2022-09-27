import './data-item.js';

class DataList extends HTMLElement {

    set films(films) {
        this._films = films;
        this.render();
    }
    
    render() {
        this.innerHTML = "";
        this.className = "row row-cols-1 row-cols-md-4";
        this._films.forEach(film => {
            const dataItemElement = document.createElement("data-item");
            dataItemElement.data = film;
            this.appendChild(dataItemElement);
        });
    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        <h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("data-list", DataList);