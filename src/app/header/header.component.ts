import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title; /*1.서버에서 값을 가져옴 : 부모에서 값을 받아 오겠다*/
  constructor() { }

  ngOnInit() {
  }
}
