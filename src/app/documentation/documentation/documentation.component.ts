import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  date: any = new Date();
  year: any = this.date.getUTCFullYear();
  constructor() { }

  ngOnInit() {
  }

}
