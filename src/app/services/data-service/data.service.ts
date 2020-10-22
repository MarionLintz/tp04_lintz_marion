import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
}
