export class logs {
    static success(message:string){
         console.log(`%c ${message}`, 'color:#42ba59')
    }
    static danger(message:string){
        console.log(`%c ${message}`, 'color:red;backgroud:yellow')
    }
    static warnig(message:string){
        console.log(`%c ${message}`, 'color:#FFA500')
    }
    static info(message:string){
        console.log(`%c ${message}`, 'color:#0000FF')
    }
}