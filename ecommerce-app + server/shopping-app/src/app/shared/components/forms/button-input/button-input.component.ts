import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-input',
  templateUrl: './button-input.component.html',
  styleUrls: ['./button-input.component.scss'],
})
export class ButtonInputComponent implements OnInit {
  @Input() name: string;
  constructor() {
    this.name = '';
  }

  ngOnInit(): void {}
}
