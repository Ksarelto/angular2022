export interface IItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnail;
    medium?: IThumbnail;
    high?: IThumbnail;
    standard?: IThumbnail;
    maxres?: IThumbnail;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalize;
  defaultAudioLanguage: string;
}

export interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ILocalize {
  title: string;
  description: string;
}

export interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
