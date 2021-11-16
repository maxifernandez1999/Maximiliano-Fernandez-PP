import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/shared/models/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.scss']
})
export class CountriesTableComponent implements OnInit {
  public countries: Country[] = [];
  @Output() sendDataToAddProducts = new EventEmitter<string[]>();
  constructor(private countriesSerice: CountriesService) { }

  ngOnInit(): void {
    this.getCountriesByRegion();
  }
  public getCountriesByRegion() {
    this.countriesSerice.getCountriesByContinent('south').subscribe(response => {
      for (const iterator of response) {
        if (iterator.name.official === "Argentine Republic" || iterator.name.official === "Kingdom of Spain" || iterator.name.official === "Republic of Paraguay") {
          let country: Country = {
            officialName: iterator.name.official,
            flag: iterator.flags.png
          }
          this.countries.push(country);
        }

      }

    });
  }
  public getRadioButtonChecked(countryName:string,flag:string){
    this.sendDataToAddProducts.emit([countryName,flag]);
  }

}
