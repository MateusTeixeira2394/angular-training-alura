import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import IThought from '../models/interfaces/thought.interface';
import { API_ADDRESS } from '../constants/tought/service.constants';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  constructor(private httpClient: HttpClient) { }

  public getAll(
    page: number = 1,
    filter: string = '',
    favorite: boolean = false
  ): Observable<IThought[]> {

    const limit: number = 6;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', limit);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    };

    if (favorite) {
      params = params.set('favorite', favorite);
    }

    return this.httpClient.get<IThought[]>(API_ADDRESS, { params });

  };

  public getById(id: number): Observable<IThought> {

    const url: string = `${API_ADDRESS}/${id}`

    return this.httpClient.get<IThought>(url);

  };

  public create(thought: IThought): Observable<IThought> {

    return this.httpClient.post<IThought>(API_ADDRESS, { ...thought, favorite: false });

  };

  public deleteOne(id: number): Observable<IThought> {

    const url: string = `${API_ADDRESS}/${id}`

    return this.httpClient.delete<IThought>(url);

  };

  public edit(thought: IThought): Observable<IThought> {

    const url: string = `${API_ADDRESS}/${thought.id}`

    return this.httpClient.put<IThought>(url, thought);
  };

  public toggleFavorite(thought: IThought): Observable<IThought> {

    thought.favorite = !thought.favorite;

    return this.edit(thought);

  };

};
