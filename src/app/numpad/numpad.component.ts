import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.css']
})
export class NumpadComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  onButtonClick(value: string): void {
    this.buttonClicked.emit(value);
  }

  ngOnInit(): void {
  }

}
