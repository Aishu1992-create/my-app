import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchInput: any = [];
  teams: any[] = [];
  allData: any[] = [];
  constructor(private http: HttpClient) { }


  // public programmingLanguages = [
  //   'Python', 'TypeScript', 'C', 'C++', 'Java',
  //   'Go', 'JavaScript', 'PHP', 'Ruby', 'Swift', 'Kotlin'
  // ]

  ngOnInit() {
    this.http.get('./assets/teams/teams.json').subscribe((data: any) => {
      this.teams = data.teams;
      console.log("teams",this.teams);
      
    });

  }
  search() {
    console.log("searchInput", this.searchInput.length);

    if (this.searchInput.length > 0) {
      this.allData = this.teams.filter(ele => ele.name.toLowerCase().includes(this.searchInput.toLowerCase()));
      console.log("alldatta ", this.allData);
    }
    else {
      this.allData = [];
    }

  }
}
