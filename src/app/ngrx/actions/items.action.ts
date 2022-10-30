import { ICustomItem } from './../../youtube/models/customItem.model';
import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/youtube/models/item.model';

const FETCH_ITEMS = '[SAVE DATA] fetch items';
const FETCH_ITEMS_SUCCESS = '[SAVE DATA] fetch items success';
const FETCH_ITEMS_ERROR = '[SAVE DATA] fetch items error';
const ADD_NEW_ITEM = '[SAVE DATA] add new item';

export const fetchItems = createAction(FETCH_ITEMS, props<{ ids: string[] }>());

export const fetchItemsSuccess = createAction(FETCH_ITEMS_SUCCESS, props<{ items: IItem[] }>());

export const fetchItemsError = createAction(FETCH_ITEMS_ERROR);

export const addNewItem = createAction(ADD_NEW_ITEM, props<{ item: ICustomItem }>());
