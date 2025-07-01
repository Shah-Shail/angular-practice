import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  name = '';
  displayName = '';
  email = '';
  handleEvent(event: Event) {
    console.log('Funciton Called', event.type);
    // console.log('Value', (event.target as HTMLInputElement).value);
  }

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Shail Shah';
  }

  getEmail(val: string) {
    this.email = val;
  }

  setEmail() {
    this.email = 'shail@gem.com';
  }
}
