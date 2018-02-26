import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Hero } from './models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  found: boolean;
  hero: Hero;
  name = '';
  data;

  newHero;

  constructor(private httpServ: HttpService) { }

  onKeyPress(event: any) {
    this.name = event.target.value;
    // console.log(event.target.value);
    console.log(this.name);
  }

  getHero() {
    this.httpServ.getHeroData(this.name)
      .subscribe(
        (hero: any[]) => {
          hero.forEach(
            y => {
              this.hero = y;
              console.log(this.hero);
            }
          );
          // console.log(new Hero(data[0].id, data[0].name, data[0].description, data[0].mainAbility));
        }
      );
    this.found = true;
  }
}

