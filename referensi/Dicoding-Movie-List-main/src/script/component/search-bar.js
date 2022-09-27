class SearchBar extends HTMLElement {
    
    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }
   
    render() {
       this.innerHTML = `
       <style>        
        .search-container {
            display: flex;
            top: 10px;
            margin: 5px 5px;
            border-radius: 12px;
            padding: 0;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
            background-color: white;
            margin-top: 20px;
            margin-bottom: 50px;
        }
        
        .search-container > input {
            width: 75%;
            border: 0;
            font-weight: bold;
            padding-left: 20px;
            border-radius: 12px;
        }
        
        .search-container > input:focus {
            outline: 0.5;
            padding-left: 10px;
            font-size: 18px;
            border-radius: 12px;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            border-radius: 12px;
        }
        
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <section class="container">
        <div class="row justify-content-center">
            <div id="search-container" class="col-lg-10 search-container">
                <input  placeholder="Search..." id="searchElement" type="search">
                <button  class="btn btn-light" id="searchButtonElement" type="submit">Search</button>
            </div>
        </div>
        </section>
       `;

       this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);