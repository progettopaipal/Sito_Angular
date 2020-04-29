import { Component } from '@angular/core';
import { GestoreVideoService } from './gestore-video.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GestoreVideoService]
})
export class AppComponent {
  title = 'ficarra-picone';
}
