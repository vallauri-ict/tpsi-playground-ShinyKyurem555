const rows = 6;
const columns = 7;
const grigio = "gray";
let fine = false;
let _wrapper;
let _giocatoreNext;
let _div;
window.onload=function () {
    _wrapper=document.getElementById("wrapper");
    _giocatoreNext=document.getElementById("nextPlayer");
    for (let i=0; i<rows; i++){
        for (let j=0; j<columns; j++){
            _div=document.createElement("div");
            _div.setAttribute("class","pedina");
            _div.style.backgroundColor=grigio;
            _div.setAttribute("id","div-"+i+"-"+j);
            _wrapper.appendChild(_div);
            if (i==rows-1){
                _div.addEventListener("click", visualizza);
            }
        }
    }
    _giocatoreNext.setAttribute("class","pedina");
    _giocatoreNext.style.backgroundColor="yellow";
    _giocatoreNext.style.coloreNascosto="red";
}
function visualizza() {
    let id=this.getAttribute("id");
    let aus=id.split('-');
    let riga=parseInt(aus[1]);
    let colonna=parseInt(aus[2]);
    if (!fine) {
        this.style.backgroundColor = _giocatoreNext.style.backgroundColor;
        this.removeEventListener("click", visualizza);
        cambiaColore();
        if (ritornaVincita() == false) {
            if (riga > 0) {
                let _div = document.getElementById("div-" + (riga - 1) + "-" + colonna);
                _div.addEventListener("click", visualizza);
            }
        } else {
            alert("Hai vinto!");
            fine=true;
        }
    }
}
function cambiaColore() {
    let aus=_giocatoreNext.style.backgroundColor;
    _giocatoreNext.style.backgroundColor=_giocatoreNext.style.coloreNascosto;
    _giocatoreNext.style.coloreNascosto=aus;
}
function ritornaVincita() {
    let vinto=false;
    for (let i=0; i<rows; i++){
        for (let j=0; j<columns-3; j++){
            let _current=document.getElementById("div-"+i+"-"+j);
            let next1=document.getElementById("div-"+i+"-"+(j+1));
            let next2=document.getElementById("div-"+i+"-"+(j+2));
            let next3=document.getElementById("div-"+i+"-"+(j+3));
            if (_current.style.backgroundColor!=grigio){
                if (_current.style.backgroundColor == next1.style.backgroundColor && _current.style.backgroundColor == next2.style.backgroundColor && _current.style.backgroundColor == next3.style.backgroundColor) {
                    vinto = true;
                    i = rows;
                    j = columns - 3;
                }
            }
        }
    }
    if (!vinto) {
        for (let j = 0; j < columns; j++) {
            for (let i = 0; i < rows - 3; i++) {
                let _current = document.getElementById("div-" + i + "-" + j);
                let next1 = document.getElementById("div-" + (i + 1) + "-" + j);
                let next2 = document.getElementById("div-" + (i + 2) + "-" + j);
                let next3 = document.getElementById("div-" + (i + 3) + "-" + j);
                if (_current.style.backgroundColor != grigio){
                    if (_current.style.backgroundColor == next1.style.backgroundColor && _current.style.backgroundColor == next2.style.backgroundColor && _current.style.backgroundColor == next3.style.backgroundColor) {
                        vinto = true;
                        i = rows-3;
                        j = columns;
                    }
                }
            }
        }
    }
    return vinto;
}