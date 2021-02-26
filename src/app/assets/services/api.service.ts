import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from 'rxjs';

const BASE = 'http://localhost:7000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public helloWorld(): Observable<any> {
    return this.httpClient.get<{ hello: string }>(`${BASE}/getDiff`);

    // return from(
    //   fetch(
    //     `${BASE}/getDiff`, // the url you are trying to access
    //     {
    //       body: JSON.stringify(data),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       method: 'POST',
    //       mode: 'no-cors'
    //     }
    //   ));

  }
}
