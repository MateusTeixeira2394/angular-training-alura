import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import IThought from '../../../../../models/interfaces/thought.interface';

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
    model: 'modelo3'
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public deleteOne(): void {
    this.router.navigate(['thoughts/delete/' + this.thought.id]);
  }

  public getLengthClass(): string {

    if (this.thought.message.length > 256) {
      return 'pensamento-g';
    };

    return 'pensamento-p';

  };

}
