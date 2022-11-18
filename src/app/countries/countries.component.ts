import { Component, OnInit } from '@angular/core';
import { country } from '../mock/Countries';
import { IRESTCountries } from '../mock/IRESTCountries';
// import { CountriesService } from '../service/countries.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit{

  country = country;

  countries: IRESTCountries[]  = [];

  constructor(
    // private data: CountriesService,
  ) {}

  ngOnInit(): void {
    // this.data.getAllCountries().subscribe(heroes => this.countries = this.countries)
  }
}


