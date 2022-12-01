import { Component, OnInit } from '@angular/core';
import IThought from '../../../../models/interfaces/thought.interface';
import { ThoughtService } from '../../../../services/thought.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public thoughts: IThought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(thoughts => this.thoughts = thoughts);
  }


}
