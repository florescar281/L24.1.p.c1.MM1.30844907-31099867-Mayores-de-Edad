export default class Cl_Edad{
    constructor(){
        this.contPersonas = 0;
        this.contMayores = 0;
    }    

    procesarPersonas(p){
        this.contPersonas++;

        if(p.edad >= 18){
            this.contMayores++;
        }
    }

    devolverMayores(){
        return this.contMayores;
    }

    devolverPersonas(){        
        return this.contPersonas;
    }

    devolverPorcentaje(){        
        return ((this.contMayores / this.contPersonas) * 100).toFixed(2);
    }
}