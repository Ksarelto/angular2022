import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { IItem } from '../models/item.model';
import { IDataBase, IResponse } from '../models/response.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as ItemsActions from '../../ngrx/actions/items.action';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  data: IItem[];

  dataBase = new BehaviorSubject<IItem[]>([]);

  oneItem = new Subject<IItem>();

  constructor(private httpClient: HttpClient, private store: Store) {
    this.dataBase.subscribe((value) => {
      if (value) {
        this.data = value;
      }
    });
  }

  downloadDb(searchStr: string) {
    let params = new HttpParams()
      .append('q', searchStr)
      .append('type', 'video')
      .append('part', 'snippet')
      .append('maxResults', '15');

    return this.httpClient
      .get('/search', {
        params: params,
      })
      .subscribe((value) => {
        const { items } = value as IResponse;
        const ids = items.map((i) => i.id.videoId);

        this.store.dispatch(ItemsActions.fetchItems({ ids }));
      });
  }

  getVideos(ids: string[]) {
    const params = new HttpParams()
      .append('id', ids.join(','))
      .append('part', 'snippet, statistics');

    return this.httpClient.get('/videos', {
      params,
    });
  }

  getOneById(id: string) {
    const params = new HttpParams().append('id', id).append('part', 'snippet, statistics');

    this.httpClient
      .get('/videos', {
        params: params,
      })
      .subscribe((data) => this.oneItem.next((data as IDataBase).items[0]));
  }
}
