import { Component, OnInit } from '@angular/core';
import IThought from '../../../../models/interfaces/thought.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public thoughts: IThought[] = [
    {
      id:'1',
      message: 'Eu gosto de Angular',
      author: 'Dev Jr.',
      model: 'modelo1'
    },
    {
      id:'2',
      message: 'Eu prefiro React',
      author: 'Dev Pleno',
      model: 'modelo2'
    },
    {
      id:'3',
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: 'Gerador de lero-lero',
      model: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
