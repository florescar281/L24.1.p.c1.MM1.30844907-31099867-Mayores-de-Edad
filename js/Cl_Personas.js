export default class Cl_Personas{
    constructor(n,e){
        this.nombre = n
        this.edad = e
    }

    set edad(e){    
        this._edad = e
    }

    get edad(){
        return this._edad
    }
}