export class Contacto {
    constructor (
        //Parametros Obligatorios
        public email: string,
        public pais: string,
        //Parametros NO Obligatorios
        public telefono?: number,
        public comentario?: string,
    ){}
}