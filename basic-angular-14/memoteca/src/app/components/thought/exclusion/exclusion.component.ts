import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTE_THOUGHT_LIST } from '../../../../constants/tought/routes.constants';
import IThought from '../../../../models/interfaces/thought.interface';
import { ThoughtService } from './../../../../services/thought.service';

@Component({
  selector: 'app-exclusion',
  templateUrl: './exclusion.component.html',
  styleUrls: ['./exclusion.component.css']
})
export class ExclusionComponent implements OnInit {

  public thought: IThought = {
    id: 0,
    message: '',
    author: '',
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

  };

  private getById(id: number): void {

    if (id) {
      this.service.getById(id).subscribe(thought => this.thought = thought);
    }

  };

  public deleteOne(): void {

    const { id } = this.thought;

    if (id) {
      this.service.deleteOne(id).subscribe(() => this.router.navigate([ROUTE_THOUGHT_LIST]));
    };

  };

  public cancel(): void {
    this.router.navigate([ROUTE_THOUGHT_LIST]);
  }

}
