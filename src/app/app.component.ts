import { Component } from '@angular/core';
import stayData from '../example_data/stays.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'windbnb';
  temp_data = stayData;
}
