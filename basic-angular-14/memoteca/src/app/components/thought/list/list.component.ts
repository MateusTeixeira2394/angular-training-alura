import { Component, OnInit } from '@angular/core';
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

  private page: number = 0;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.loadMoreThoughts();
  };

  public loadMoreThoughts(): void {

    this.service.getAll(++this.page, this.filter).subscribe(thoughts => {

      this.thoughts.push(...thoughts);

      if (!thoughts.length) {

        this.thereAreMoreThoughts = false;

      }

    });

  };

  public filterThoughts(): void {

    this.page = 1;
    this.thereAreMoreThoughts = true;

    this.service.getAll(this.page, this.filter).subscribe(thoughts => {

      this.thoughts = thoughts;

    });

  };


}
