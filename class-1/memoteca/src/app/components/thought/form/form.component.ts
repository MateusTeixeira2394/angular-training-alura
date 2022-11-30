import { Component, OnInit } from '@angular/core';

interface IThought {
  id: string;
  message: string;
  author: string;
  model: 'modelo1' | 'modelo2' | 'modelo3'
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public thought: IThought = {
    id:'1',
    author: 'Dev',
    message: 'Something intersting',
    model: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    alert("Save the thought!");
  }

  public cancel(): void {
    console.log('cancel')
  }

}
