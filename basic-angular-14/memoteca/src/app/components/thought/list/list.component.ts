import { Component, OnInit } from '@angular/core';
import IFilter from '../../../../models/interfaces/filter.interface';
import IThought from '../../../../models/interfaces/thought.interface';
import { ThoughtService } from '../../../../services/thought.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public thoughts: IThought[] = [];

  public thereAreMoreThoughts: boolean = true;

  public filter: string = '';

  public page: number = 0;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.loadMoreThoughts();
  };

  public loadMoreThoughts(): void {
    console.log('page',this.page)
    console.log('filter',this.filter)
    this.service.getAll(++this.page, this.filter).subscribe(thoughts => {

      this.thoughts.push(...thoughts);

      if (!thoughts.length) {

        this.thereAreMoreThoughts = false;

      }

    });

  };

  public filterThoughts(param: IFilter): void {

    this.page = 1;
    this.filter = param.filter;
    this.thereAreMoreThoughts = true;

    this.service.getAll(param.page, param.filter).subscribe(thoughts => {

      this.thoughts = thoughts;

    });

  };


}
