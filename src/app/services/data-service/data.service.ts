import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVICE_URL: string = "/assets/mock/";

  constructor(private http: HttpClient) { }

  GetList() : Observable<any>{
    return this.http.get<any>(this.SERVICE_URL + 'GetList.json').pipe(
      map(data => data.data)
    );
  }
}
