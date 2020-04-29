import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { GestoreVideoService } from '../gestore-video.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Video } from '../video.model';
import { isFormattedError } from '@angular/compiler';
@Component({
  selector: 'app-cont-video',
  templateUrl: './cont-video.component.html',
  styleUrls: ['./cont-video.component.css']
})
export class ContVideoComponent implements OnInit {
   public array : Video[] = [];
   public array2 : Video[] = [];
   
  constructor(public gvs : GestoreVideoService ) {
   this.array2 =  gvs.get_tutti();
    this.array =  gvs.get_tutti();
    console.log(this.array2);
    console.log(this.array);
  
   // this.array = gvs.get_tutti();
    
   }
   ordina_per_nome() {
    
return this.array.sort(function (a, b) {
  return a.titolo.localeCompare(b.titolo);
});

     
   }
   azzera () {
      this.array  = [...this.array2];
   }
   applica (select,testo) {
  let str : string = testo.value.toLowerCase();
   this.array  = [...this.array2];
   let rex = new RegExp("[a-zA-Z-\s]*"+str+"[a-zA-Z-\s]*");
   if(testo.value != "") {
      for (let i = 0;i < this.array.length;++i) {
         if (!rex.test(this.array[i].titolo.toLowerCase())) {
            console.log("1");
            this.array.splice(i,1);
          --i;
         }
      }
   }
     /* if(testo.value != "") {
         for (let i = 0;i < this.array.length;++i) {
            if (this.array[i].titolo != testo.value) {
               console.log("1");
               this.array.splice(i,1);
             --i;
            }
         }
      }*/
      
      var scelta = select.value;
      if (scelta == "Ordina per nome") {
         this.array =  this.ordina_per_nome();
      }if (scelta == "Ordina per durata") {
         this.array = this.ordina_per_durata();
      }
   }
   ordina_per_durata() {
   return  this.array.sort((a,b) => a.durata - b.durata);
   }
  ngOnInit(): void {
    
  }

}
