import { ROUTE_THOUGHT_LIST } from './../../../../constants/tought/routes.constants';
import { Router, ActivatedRoute } from '@angular/router';
import { ThoughtService } from './../../../../services/thought.service';
import { Component, OnInit } from '@angular/core';
import IThought from '../../../../models/interfaces/thought.interface';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  public thought: IThought = {
    id: 0,
    author: '',
    message: '',
    model: 'modelo1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id') || '0';

    this.getById(parseInt(id));

  }

  private getById(id: number): void {
    this.service.getById(id).subscribe(thought => this.thought = thought);
  }

  public edit(): void {
    this.service.edit(this.thought).subscribe(() => this.router.navigate([ROUTE_THOUGHT_LIST]));
  }

  public cancel(): void {
    this.router.navigate([ROUTE_THOUGHT_LIST]);
  }

}
