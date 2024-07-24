import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../store/items.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  title: string = 'Contador usando redux';
  counter: number = 0;

  constructor(private store: Store<{ counter: number }>) {
    this.store.select('counter').subscribe((count) => (this.counter = count));
  }

  increment() {
    this.store.dispatch(increment({ add: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
