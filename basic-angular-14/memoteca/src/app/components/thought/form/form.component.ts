import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      message: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      model: ['modelo1']
    })
  }

  public create(): void {
    console.log(this.form)
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(() => {
        this.router.navigate([ROUTE_THOUGHT_LIST]);
      });
    }
  };

  public cancel(): void {
    this.router.navigate([ROUTE_THOUGHT_LIST]);
  };

  public enableButton(): string {

    if (this.form.valid) {
      return 'botao';
    };

    return 'botao__desabilitado';

  }

}
