import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Hero } from '../models/hero.model';
@Injectable()
export class HttpService {

  constructor(private httpClient: Http) {}
  public getHeroData(id: number): Observable<Hero> {
    return this.httpClient
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .map((response: Response) => {
        return <Hero>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}

