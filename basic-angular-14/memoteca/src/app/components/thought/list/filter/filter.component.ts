import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import IFilter from '../../../../../models/interfaces/filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output()
  public filterThoughts: EventEmitter<IFilter> = new EventEmitter();

  @Input()
  public page: number = 1

  constructor() { }

  ngOnInit(): void {
  }

  public filterParent(event: KeyboardEvent): void {
    this.filterThoughts.emit({ page: this.page, filter: (event.target as HTMLInputElement).value });
  };

}
