



        // LLAMADO A LOS IDS

// LETRA EN EL DIV DE ARRIBA
const input = document.getElementById('inputLetter');
const divParraf = document.getElementById('Parraf');

//IMPRIMIR CARACTERES
const texTarea = document.getElementById('idTextarea');
const parraftRint = document.getElementById('ParraFinal');

const btn = document.getElementById('btn');


btn.addEventListener('click', caPrint)

// F U N C I O N   D E L   B O T O N
function caPrint(eventPrint) {
    if (eventPrint.type ==  "click"){
        parraftRint.textContent = texTarea.value;
        divParraf.textContent = input.value.charAt(0).toUpperCase();
        
    }
}




//CONTADOR
function contador() {
    const counterParraf = document.getElementById('counter');
    let valor = 200;
    let cantidad = texTarea.value.length;
    counter.textContent =   `Caracteres: ${valor - cantidad}`;
    
    if (cantidad > 150) {
        counter.style.color = "red";
    }else{
        counter.style.color = "white";
    }
}




