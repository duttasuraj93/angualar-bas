import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message = 'message from child';

  @Output() messageEvent = new EventEmitter<string>();

  @Input() childMessage: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

  sendMessage() {
    console.log("hello from child")
  }

}
