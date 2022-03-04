import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snowflake';
  svg: string = "";

  setSvg(svg: string): void {
    this.svg = svg;
  }
}
