import { createReducer, on } from '@ngrx/store';
import * as DataActions from '../actions/items.action';
import { IItemsState } from '../models/items.model';

const initialState: IItemsState = {
  remoteItems: [],
  isFetched: false,
  newItems: [],
};

export const ItemsReducer = createReducer(
  initialState,
  on(
    DataActions.fetchItemsSuccess,
    (state, { items }): IItemsState => ({
      ...state,
      remoteItems: items,
      isFetched: true,
    }),
  ),
  on(DataActions.fetchItemsError, (state): IItemsState => ({ ...state, isFetched: true })),
  on(
    DataActions.addNewItem,
    (state, { item }): IItemsState => ({
      ...state,
      newItems: [...state.newItems, item],
    }),
  ),
);
