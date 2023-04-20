import { ADATLISTA } from "./adat.js";
$(function () {

    const CARDELEM = $("#publik");
    let tartalom = megjelenit(ADATLISTA);
    CARDELEM.append(tartalom);

    $(".nagyit").on("click", function () {
        let adat = ADATLISTA[index];
        let modalTartalom = "";
        
        
    });

})


function megjelenit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
    
        
        txt += "<div class='card m-2' id='gallery-images' style='width: 18rem';>";
        txt += "<img class='card-img-top' src='./képek/Képkivágás.PNG' alt='Card image cap'>";
         
        
        for (let kulcs in lista[index]) {
            txt += "<h3 class='card-title'>" + lista[index][kulcs] + "</h3>";
        }
        txt += "<a href=# class='nagyit btn btn-primary data-bs-toggle='popover' title='valami' data-bs-content='Some content inside the popover'>Több info</button> </a>";
        txt += "</div>";
        txt += "</div>";
    }
    return txt;
}


