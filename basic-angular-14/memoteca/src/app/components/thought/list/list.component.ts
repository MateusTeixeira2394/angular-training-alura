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

  private readonly MY_MURAL: string = 'My Mural';

  private readonly MY_FAVORITES: string = 'My Favorites';

  private showFavorites: boolean = false;

  public thoughts: IThought[] = [];

  public thereAreMoreThoughts: boolean = true;

  public filter: string = '';

  public page: number = 0;

  public title: string = this.MY_MURAL;

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.loadMoreThoughts();
  };

  public loadMoreThoughts(): void {

    this.service.getAll(++this.page, this.filter, this.showFavorites).subscribe(thoughts => {

      this.thoughts.push(...thoughts);

      if (!thoughts.length) {

        this.thereAreMoreThoughts = false;

      }

    });

  };

  public changeToFavorites(): void {
    this.title = this.MY_FAVORITES;
    this.showFavorites = true;
    this.filterThoughts({ page: 1, filter: this.filter });
  }

  public changeToMyMural(): void {
    this.title = this.MY_MURAL;
    this.showFavorites = false;
    this.filterThoughts({ page: 1, filter: this.filter });
  }

  public filterThoughts(param: IFilter): void {

    this.page = 1;
    this.filter = param.filter;
    this.thereAreMoreThoughts = true;

    this.service.getAll(param.page, param.filter, this.showFavorites).subscribe(thoughts => {

      this.thoughts = thoughts;

    });

  };


}
