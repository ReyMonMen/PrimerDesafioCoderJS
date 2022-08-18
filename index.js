let nombre;
let pepe = 1;
let juan = 1;
let medico = 0;

for(i=0; i < 4; i++){
    medico = prompt("ingrese 1 para ser atendido por el Dr. Pepe o 2 para ser atendido por el Dr. Juan");
    medico = parseInt(medico);

    if(medico === 666){
        alert("Snake Plissken dice... Hasta la vista baby!!!  CABOOOOOM")
        break;
    }

    if (medico !== 1 && medico !== 2){
        i--;
        alert("el valor ingresado es invalido.");
        continue;
        
    }
    nombre = prompt("Por favor, ingrese su nombre.");

    if (medico === 1){

            if (pepe <= 2){
                alert(`Sr/a ${nombre}, tienes el turno #${pepe} para ser atendido/a por el Dr. Pepe.`);
                pepe++; 
           
            }else{
                alert(`se acabaron los turnos con el Dr. Pepe, intente con el Dr. Juan.`);
                i--;
            }
        
    }else{        
            if (juan <= 2){
                alert(`Sr/a ${nombre}, tienes el turno #${juan} para ser atendido/a por el Dr. Juan.`);
                juan++;

            }else{
                alert(`se acabaron los turnos con el Dr. Juan. Intente con el Dr. Pepe.`);
                i--;
            }
    }
}

alert("Se acabaron los turnos por el dia de hoy.");