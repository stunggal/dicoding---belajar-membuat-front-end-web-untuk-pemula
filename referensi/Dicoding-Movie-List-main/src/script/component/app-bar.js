import bgJumbotron from "../../img/bg.jpg";

class AppBar extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .nav-link {
            margin-right: 30px;
        }
        
        .navbar {
            position: relative;
            z-index: 1;
        }
        
        .nav-link{
            color: white !important;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
        }
        
        .navbar-brand {
            font-family: 'Viga', sans-serif;
            font-size: 32px;
            color: white !important;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
        }

        .jumbotron {
            background-image: url('${bgJumbotron}');
            background-size: cover;
            height: 600px;
            text-align: center;
            background-position: center;
            position: relative;
            margin-top: -75px;
        }

        .jumbotron .container {
            z-index: 1;
            position: relative;
        }

        .jumbotron::after {
            content: '';
            display: block;
            width: 100%;
            height: 70%;
            background-image: linear-gradient(to top, rgba(0,0,0,1),rgba(0,0,0,0));
            position: absolute;
            bottom: 0;
        }

        .jumbotron .display-4 {
            font-family: 'Poppins', sans-serif;
            color: white;
            margin-top: 150px;
            text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
            font-size: 40px;
            margin-bottom: 10px;
            font-weight: 500;
        }

        </style>

        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="#">NontonFilm</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <a class="btn btn-outline-light" href="#">Bergabung</a>
            </div>
            </div>
        </div>
        </nav>

        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Butuh Referensi Film Terbaru ?</h1>
          <a href="" class="btn btn-outline-light">Lihat Disini</a>
        </div>
        </div>
        `;
    }
}

customElements.define("app-bar",AppBar);