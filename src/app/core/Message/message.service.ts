import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message:string = '';
  constructor() { }
add(mensagem:string){
this.message = mensagem;

setTimeout(() => {
  this.clear();
}, 1000000000);
}


clear(){
  this.message = '';
}
}
