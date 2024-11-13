import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [ChildComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('AppComponent ngAfterViewInit');
  }
}
