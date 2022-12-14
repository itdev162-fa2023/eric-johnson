import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  weatherForecasts: any;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('http://localhost:4200/weatherforecast').subscribe(
      response => { this.weatherForecasts = response; },
      error => { console.log(error) }
    );
  }
}
