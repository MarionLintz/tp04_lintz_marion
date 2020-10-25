import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from 'src/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private SERVICE_URL: string = environment.urlBouchonFolder;

  constructor(private http: HttpClient) { }

  GetList() : Observable<any>{
    return this.http.get<any>(this.SERVICE_URL + 'GetList.json').pipe(
      map(data => data.data)
    );
  }

  GetProductFromId(id: number) : Observable<Product>{
    return this.http.get<any>(this.SERVICE_URL + 'GetList.json').pipe(
      map((data) => data.data.filter(e => e.Id == id)[0]),
    );
  }

  GetDetails(id: number) : Observable<any>{
    return this.http.get<any>(this.SERVICE_URL + 'GetDetails' + id  + '.json')
  }
}
