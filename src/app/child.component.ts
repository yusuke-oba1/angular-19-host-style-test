import { CommonModule } from '@angular/common';
import { AfterViewInit, inject, ViewContainerRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-child',
    imports: [CommonModule],
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewInit {
  
  private _vcr:ViewContainerRef;

  constructor() {
    this._vcr = inject(ViewContainerRef);
  }
  ngAfterViewInit() {
    console.log('my element width is', this._vcr.element.nativeElement.clientWidth + 'px');
  }
}