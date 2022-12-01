import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_THOUGHT_LIST } from '../../../../constants/tought/routes.constants';
import IThought from '../../../../models/interfaces/thought.interface';
import { ThoughtService } from './../../../../services/thought.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public thought: IThought = {
    author: '',
    message: '',
    model: 'modelo1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public create(thought: IThought): void {
    this.service.create(thought).subscribe(() => {
      this.router.navigate([ROUTE_THOUGHT_LIST]);
    });
  };

  public cancel(): void {
    this.router.navigate([ROUTE_THOUGHT_LIST]);
  };

}
