import { Injectable }                     from '@angular/core';
import { Http, Response }                 from '@angular/http';
import { Headers, RequestOptions }        from '@angular/http';
import { Observable }                     from 'rxjs';
import { Router, ActivatedRoute }         from '@angular/router';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
 log:any;
 time:any;
 options:any;

 private baseUrl = '';
  constructor(private http: Http,
    private route: ActivatedRoute,
    private router: Router) { }

//General get method for http call using AJAX method using Observables
get(q: any): Observable<any> {
  this.create();
  return this.http.get(this.baseUrl + q, this.options)
    .map(this.extractData)
    .catch(this.handleError);
}
getContentJSON() {
  return this.http.get('assets/productlist.json')
  .map(response => response.json());
}
post(q: any, obj: any): Observable<any> {
  this.create();
  return this.http.post(this.baseUrl + q, obj, this.options)
    .map(this.extractData)
    .catch(this.handleError);
}
uploadFile(q: any, obj: any): Observable<any> {
  return this.http.post(this.baseUrl + q, obj, this.options)
    .map(this.extractData)
    .catch(this.handleError);
}
private extractData(res: Response) {
  let body;
  let status: number;
  try {
    body = res.text() ? res.json() : {};
  }
  catch (e) {
    body = res.text();
  }
  finally {
    status = res.status;
  }
  return { body, status };
}

private create() {
  let headers = new Headers();
  
  headers.append('Content-Type', 'application/json');
  
  this.options = new RequestOptions({ headers: headers });
}

private handleError(error: Response | any) {
  return Observable.throw(error);
}

}