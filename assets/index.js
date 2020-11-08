window.onload = function() { //Acciones tras cargar la página
    pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
}

let x="0"; //guardar número en pantalla
let xi=1; //iniciar número en pantalla: 1=si; 0=no;
let coma=0; //estado coma decimal 0=no, 1=si;
let ni=0; //número oculto o en espera.
let op="no"; //operación en curso; "no" =  sin operación

function numero(xx) { //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) { // inicializar un número, 
        pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
                }
    } else { //continuar escribiendo un número
            if (xx=="." && coma==0) { //si escribimos una coma decimal p�r primera vez
                pantalla.innerHTML+=xx;
                x+=xx;
                coma=1; //cambiar el estado de la coma  
            }
            //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
            else if (xx=="." && coma==1) {} 
            //Resto de casos: escribir un número del 0 al 9: 	 
                else {
                    pantalla.innerHTML+=xx;
                    x+=xx;
                }
            }
                xi=0 //el número está iniciado y podemos ampliarlo.
}

function operar(s) {
    igualar(); //si hay operaciones pendientes se realizan primero
    ni=x //ponemos el 1� número en "numero en espera" para poder escribir el segundo.
    op=s; //guardamos tipo de operación.
    xi=1; //inicializar pantalla.
}

function igualar() {
    if (op=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;	//mostramos el mismo número	
    } else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
    }
}
