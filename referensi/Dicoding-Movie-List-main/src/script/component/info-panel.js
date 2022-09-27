import newImage from "../../img/new.png";
import freeImage from "../../img/free.png";
import fourK from "../../img/4k.png";

class InfoPanel extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
        .info-panel {
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            margin-top: -100px;
            background-color: white;
            padding: 30px;
        }
        
        .info-panel img {
            width: 80px;
            height: 80px;
            margin-right: 20px;
            margin-bottom: 20px;
        }
        
        
        .info-panel h4 {
            font-size: 16px;
            text-transform: uppercase;
            font-weight: bold;
            margin-top: 5px;
        }
        
        .info-panel p {
            font-size: 14px;
            color: #ACACAC;
            margin-top: -5px;
            font-weight: 200;
        }
        </style>

        <div class="container">
        <div class="row justify-content-center">
            <div class="col-10 info-panel">
                <div class="row">
                    <div class="col-lg">
                        <img src="${newImage}" alt="" class="float-left">
                        <h4>Up To Date</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="col-lg">
                        <img src="${fourK}" alt="" class="float-left">
                        <h4>High-Res</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="col-lg">
                        <img src="${freeImage}" alt="" class="float-left">
                        <h4>Free</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `;
    }
}

customElements.define("info-panel",InfoPanel);