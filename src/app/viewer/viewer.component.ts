import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  @ViewChild('svg') svgContainer?: ElementRef;
  @Input() svg: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.svgContainer) {
      this.svgContainer.nativeElement.innerHTML = this.svg;
    }
  }
}
