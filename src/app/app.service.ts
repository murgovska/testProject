import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as api from './globals/api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppServiceService {

  constructor(private http: Http) { }

  getCasinoCategories(): Observable<any> {
    return this.http.get(api.casinoCategories)
                    .map(this.extractData)
                    .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
