import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenuto',
  templateUrl: './contenuto.component.html',
  styleUrls: ['./contenuto.component.css']
})
export class ContenutoComponent {
    frase = "";
    frase_p = ["Questo ","sito ","è ","stato ","realizzato ","per ","intrattenere ","i fans ","di ",
    "Ficarra e Picone"];
    i : number;
    y : number;
    valore = true;
    condizione = true;
    vita_p : string[] = [
      "Artisticamente nascono nel 1993 con un trio di cui faceva parte anche Salvo Borrello",
      "Nel 2001 esce il loro primo film 'Nati stanchi'",
      "Nel 2007 sono stati ospiti a Sanremo",
      "Nel 2005 hanno condotto striscia la notizia per la prima volta",
      "Si sono conosciuti in un villaggio turistico"
    ];
    vita : string[] = [
     
    ];
  constructor() {
    this.i = 0;
    this.y = 0;
    this.animation();
   }
   animation2(){
       this.frase = this.frase + this.frase_p[this.y];
       if ( this.y !=  (this.frase_p.length - 1)) {
        setTimeout(() => {this.animation2();} , 1000);
      }
      ++this.y;
   }
   animation() {
    this.condizione = !this.condizione;
     console.log(this.vita);
     this.vita.push(this.vita_p[this.i]);
     if ( this.i !=  (this.vita_p.length - 1)) {
       setTimeout(() => {this.animation();} , 1000);
       
     }else {
      this.animation2();
      this.valore = false;
     }
     ++this.i;
     console.log(this.vita);
   }

}
