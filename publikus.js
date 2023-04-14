import { ADATLISTA } from "./adat.js";

$(function() {
    const kartyaElem = $();
    let tartalom = megjelenit(ADATLISTA);
    kartyaElem.append (tartalom);
});


function megjelenit(lista) {
    let txt = ""; 
    for (let index = 0; index < lista.length, index++){
        txt += "<div class='card col-sm-4' >";
        txt += "<div class='card-body'>";
    }

}
