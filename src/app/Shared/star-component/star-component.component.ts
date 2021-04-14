import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.scss']
})
export class StarComponentComponent implements OnInit,OnChanges {

  // Inputs
  @Input() rating : number = 5;
  
  // Outputs
  @Output() notify : EventEmitter<string> = new EventEmitter<string>();

  starWidth : number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    this.starWidth = this.rating * 75/5;

  }

  OnClick(): void {
    this.notify.emit(`Star Component ${this.rating} was clicked`);
  }

}
