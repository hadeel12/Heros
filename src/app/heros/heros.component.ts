import { Component, OnInit } from '@angular/core';
import { Herodata } from '../herodata';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heros = Herodata;
  constructor() { }

  ngOnInit() {
  }

}
