import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {

  constructor(private countriesSerice: CountriesService) { }

  ngOnInit(): void {
  }

  public getCountriesByRegion(){
    this.countriesSerice.getCountriesByContinent('europe');
  }

}
