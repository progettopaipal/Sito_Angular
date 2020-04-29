import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from './video.model';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class GestoreVideoService {
  video : Video[] = [];
  

  constructor(public  http : HttpClient) {
    

   }
   public get()  : Video[] {
     console.log("--");
     console.log(this.video);
    return this.video;
   }
   dim () {
     const v = this.get_tutti().length;
     return v;
   }
  get_tutti () : Video[] {
   
    const video : Video[] = [];
     this.getJSON().subscribe(data => {
      
     for (let i = 0; i < data.video.length ; ++i) {
       video.push( 
           (new Video(data.video[i].titolo,data.video[i].durata,data.video[i].nome_file,data.video[i].descrizione) )               
       ); 
     }
     
     });
    return video;
  }
  public getJSON() : Observable<any> {
    return this.http.get("../assets/file.json");
  }
 
}
