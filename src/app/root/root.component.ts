import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'c1-root',
  template: require('./root.component.html'),
  styles: [require('./root.component.css')]
})
export class RootComponent {
  random = Math.random();
}