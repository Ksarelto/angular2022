import { Injectable } from '@angular/core';
import { IItem } from '../models/item.model';
import * as db from '../../../dataBase.json';
import { IDataBase } from '../models/response.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  data: IDataBase;

  dataBase = new BehaviorSubject<IDataBase | null>(null);

  constructor() {
    this.dataBase.subscribe((value) => {
      if (value) {
        this.data = value;
      }
    });
  }

  downloadDb() {
    this.dataBase.next(db);
  }

  getAll() {
    return this.data.items;
  }

  getOneById(id: string): IItem {
    const data = db;
    return data.items.filter((i) => i.id === id)[0];
  }
}
