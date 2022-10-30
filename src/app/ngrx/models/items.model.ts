import { ICustomItem } from './../../youtube/models/customItem.model';
import { IItem } from 'src/app/youtube/models/item.model';

export interface IItemsState {
  remoteItems: IItem[];
  isFetched: boolean;
  newItems: ICustomItem[];
}
