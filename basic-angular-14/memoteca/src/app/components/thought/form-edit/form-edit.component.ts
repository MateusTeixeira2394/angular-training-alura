import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public form!: FormGroup

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id') || '0';

    this.form = this.formBuilder.group({
      id: [],
      message: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      model: ['modelo1']
    });

    this.getById(parseInt(id));

  }

  private getById(id: number): void {
    this.service.getById(id).subscribe(thought => {
      this.form.setValue(thought);
    });
  }

  public edit(): void {
    this.service.edit(this.form.value).subscribe(() => this.router.navigate([ROUTE_THOUGHT_LIST]));
  }

  public cancel(): void {
    this.router.navigate([ROUTE_THOUGHT_LIST]);
  }

  public enableButton(): string {

    if (this.form.valid) {
      return 'botao';
    };

    return 'botao__desabilitado';

  }

}
