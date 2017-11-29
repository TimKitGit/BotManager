import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Items } from '../../providers/providers';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://example.com/api/';
  renamedUrl: string = this.url + 'users/:';
  
  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  // post(endpoint: string, body: any, reqOpts?: any) {
  //   return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  // }

  // put(endpoint: string, body: any, reqOpts?: any) {
  //   return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  // }

  // delete(endpoint: string, reqOpts?: any) {
  //   return this.http.delete(this.url + '/' + endpoint, reqOpts);
  // }

  // patch(endpoint: string, body: any, reqOpts?: any) {
  //   return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  // }



  // TODO: с уверенностью в 90% здесь есть ошибки, необходимо протестировать и переписать под реальный API!!!
  // renameUser(id: number, name: string, avatarUrl: string){
  //   return this.http.post(this.renamedUrl + id, {
  //     id: id,
  //     name: name,
  //     avatarUrl: avatarUrl,
  //   }).toPromise();
  // }

  // getUsers() {
  //  return this.http.get(this.url + '/users').toPromise().then(
  //     users => {
  //       return users.json() as Items;
  //     });
  //   }

  // getCurrentUser(id: number): Observable<object>{
  //   return this.http.get(this.url + '/users/:' + id);
  // }
}