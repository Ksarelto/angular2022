import { IItem } from './item.model';

export interface IDataBase {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IItem[];
}

export interface IResponse {
  items: [
    {
      id: {
        videoId: string;
      };
    },
  ];
}
