import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  happyText = 'Welcome to my Home';

  public myTodos = [
    'one', 'two', 'three'
  ];
  constructor() { }

  ngOnInit() {
  }

}
