import { Component, OnInit } from '@angular/core';

import { aboutlist } from '../aboutlist';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutlist=aboutlist;
  constructor() { }

  ngOnInit(): void {
  }

}
