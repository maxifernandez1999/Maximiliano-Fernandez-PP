import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {
  private countries:any[] = [];
  constructor(private countriesSerice: CountriesService) { }

  ngOnInit(): void {
    this.getCountriesByRegion();
  }

  public getCountriesByRegion(){
    this.countriesSerice.getCountriesByContinent('lima').subscribe(response => {
      this.countries = response;
      console.log(response[0].name.official);
      console.log(response[0].flags.png);
    });
  }

}
