import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popmessage',
  templateUrl: './popmessage.component.html',
  styleUrls: ['./popmessage.component.css']
})
export class PopmessageComponent implements OnInit {

  constructor() { }
  @Input() messageType!: string;
  @Input() message!: string;
  getStatus(messageType:string){
    if(messageType==='Success')
    return 'message is-success';
    else
    return 'message is-warning';    
  }
  ngOnInit(): void {
  }

}
