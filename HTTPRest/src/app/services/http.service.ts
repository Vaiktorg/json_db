import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../models/hero.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public getHeroData(name: string): any {
    return this.httpClient
      .get(`https://my-json-server.typicode.com/vaiktorg/json_db/Heroes/?name=${name}`);
  }
}

