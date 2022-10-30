class AnimeFigure extends HTMLElement {
    connectedCallback() {
        this.caption = this.getAttribute("caption") || null;

        this.innerHTML = `
          <p id="anime">${this.caption}</p>
      `;
    }
}

class CharacterFigure extends HTMLElement {
    connectedCallback() {
        this.caption = this.getAttribute("caption") || null;

        this.innerHTML = `
          <p id="character">${this.caption}</p>
      `;
    }
}

class QuoteFigure extends HTMLElement {
    connectedCallback() {
        this.caption = this.getAttribute("caption") || null;

        this.innerHTML = `
          <p id="quote">${this.caption}</p>
      `;
    }
}

customElements.define("q-anime", AnimeFigure);
customElements.define("q-character", CharacterFigure);
customElements.define("q-quote", QuoteFigure);


// Membuat element secara sintaksis jika element tidak terdapat pada DOM
if (!document.querySelector("q-anime")) {
    const imageFigureElement = document.createElement("q-anime");

    imageFigureElement.setAttribute("caption", "Please Wait A Second!");

    document.body.appendChild(imageFigureElement);
}

if (!document.querySelector("q-character")) {
    const imageFigureElement = document.createElement("q-character");

    imageFigureElement.setAttribute("caption", "Please Wait A Second!");

    document.body.appendChild(imageFigureElement);
}

if (!document.querySelector("q-quote")) {
    const imageFigureElement = document.createElement("q-quote");

    imageFigureElement.setAttribute("caption", "Please Wait A Second!");

    document.body.appendChild(imageFigureElement);
}

async function getApi() {
    const res = await fetch('https://animechan.vercel.app/api/random')

    obj = await res.json();

    console.log(obj)

    document.getElementById("anime").innerHTML = obj.anime;
    document.getElementById("character").innerHTML = obj.character;
    document.getElementById("quote").innerHTML = obj.quote;
}

getApi();
