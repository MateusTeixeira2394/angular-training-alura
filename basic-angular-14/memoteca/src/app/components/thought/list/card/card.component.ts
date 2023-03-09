import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import IThought from '../../../../../models/interfaces/thought.interface';
import { ThoughtService } from '../../../../../services/thought.service';
import { PATH_THOUGHT_DELETE, PATH_THOUGHT_EDIT } from './../../../../../constants/tought/routes.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public thought: IThought = {
    id: 0,
    message: '',
    author: '',
    model: 'modelo3',
    favorite: false
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public deleteOne(): void {
    if (this.thought.id) {
      this.router.navigate([PATH_THOUGHT_DELETE + this.thought.id]);
    }
  }

  public edit(): void {
    if (this.thought.id) {
      this.router.navigate([PATH_THOUGHT_EDIT + this.thought.id]);
    }
  }

  public getLengthClass(): string {

    if (this.thought.message.length > 256) {
      return 'pensamento-g';
    };

    return 'pensamento-p';

  };

  public getFavoriteIcon(): string {

    if (this.thought.favorite) return 'ativo';

    return 'inativo';

  }

  public toggleFavorite(): void {

    this.thoughtService.toggleFavorite(this.thought).subscribe();

  };

}
