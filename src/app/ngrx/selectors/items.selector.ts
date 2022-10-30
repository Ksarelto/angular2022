import { createSelector } from '@ngrx/store';
import { IItemsState } from '../models/items.model';
import { IState } from '../models/state.model';

export const ItemsState = (state: IState) => state.items;

export const selectRemoteItems = createSelector(
  ItemsState,
  (state: IItemsState) => state.remoteItems,
);
