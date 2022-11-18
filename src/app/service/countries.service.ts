import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Environment, ENVIRONMENT } from '../../environments/index'
import { IRESTCountries } from '../mock/IRESTCountries';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient,
    @Inject(ENVIRONMENT) private env: Environment
    ) { }

  private IRESTUrl = this.env.apiUrl;

  getAllCountries():Observable<IRESTCountries> {
    return this.http.get<IRESTCountries>(this.IRESTUrl)
  }


}
