import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: {name: string, id: number}[] = [{
    name: "Abel",
    id: 2
  },{
    name: "Julio",
    id: 5
  },{
    name: "Agosto",
    id: 8
  },{
    name: "Abril",
    id: 9
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
