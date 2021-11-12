import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-github-table',
  templateUrl: './github-table.component.html',
  styleUrls: ['./github-table.component.scss']
})
export class GithubTableComponent implements OnInit {

  public dataGitHubProfile: any;
  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() {
    this.restService.get().subscribe(response => {
      this.dataGitHubProfile = response;
    })
  }

}
