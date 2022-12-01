import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import IThought from '../models/interfaces/thought.interface';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API_ADDRESS: string = 'http://localhost:3000/thoughts'

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IThought[]> {

    return this.httpClient.get<IThought[]>(this.API_ADDRESS);

  }

  public getById(id: number): Observable<IThought> {

    const url: string = `${this.API_ADDRESS}/${id}`

    return this.httpClient.get<IThought>(url);

  }

  public create(thought: IThought): Observable<IThought> {

    return this.httpClient.post<IThought>(this.API_ADDRESS, thought);

  }

  public deleteOne(id: number): Observable<IThought> {

    const url: string = `${this.API_ADDRESS}/${id}`

    return this.httpClient.delete<IThought>(url);

  }

  public edit(thought: IThought): Observable<IThought> {

    const url: string = `${this.API_ADDRESS}/${thought.id}`

    return this.httpClient.put<IThought>(url, thought);
  }

}
