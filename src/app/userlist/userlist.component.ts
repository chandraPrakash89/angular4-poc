import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserListComponent implements OnInit {
  users = [
    {name:'james'},
    {name:'peter'},
    {name:'sofia'}

  ]
  constructor() { }

  ngOnInit() {
  }

}
