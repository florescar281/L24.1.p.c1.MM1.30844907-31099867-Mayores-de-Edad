/* Se tienen las siguientes personas:
 Luis (15), Ana (19), José (21), Carmen (17),
Rosa (18), José (22), María (17), Luz (19),
Rafael (23), Liz (15), Marcos (20) y Leo (16)
*/
import Cl_Edad from "./Cl_Edad.js";
import Cl_Personas from "./Cl_Personas.js";

const salida = document.getElementById("salida");

let edad = new Cl_Edad();
let persona1 = new Cl_Personas("Luis", 15);
let persona2 = new Cl_Personas("Ana", 19);
let persona3 = new Cl_Personas("José", 21);
let persona4 = new Cl_Personas("Carmen", 17);
let persona5 = new Cl_Personas("Rosa", 18);
let persona6 = new Cl_Personas("José", 22);
let persona7 = new Cl_Personas("María", 17);
let persona8 = new Cl_Personas("Luz", 19);
let persona9 = new Cl_Personas("Rafael", 23);
let persona10 = new Cl_Personas("Liz", 15);
let persona11 = new Cl_Personas("Marcos", 20);
let persona12 = new Cl_Personas("Leo", 16);

edad.procesarPersonas(persona1);
edad.procesarPersonas(persona2);
edad.procesarPersonas(persona3);
edad.procesarPersonas(persona4);
edad.procesarPersonas(persona5);
edad.procesarPersonas(persona6);
edad.procesarPersonas(persona7);
edad.procesarPersonas(persona8);
edad.procesarPersonas(persona9);
edad.procesarPersonas(persona10);
edad.procesarPersonas(persona11);
edad.procesarPersonas(persona12);

salida.innerHTML = `
    Cantidad de personas mayores: ${edad.devolverMayores()}<br>
    Cantidad de personas: ${edad.devolverPersonas()}<br>
    Porcentaje de personas mayores: ${edad.devolverPorcentaje()}
`