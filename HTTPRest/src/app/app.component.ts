import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpClient: HttpClient) { }


  onKeyPress(event: any) {
    console.log(event.target.value);
  }
}
