export interface ICustomItem {
  title: string;
  description: string;
  img_link: string;
  video_link: string;
  creation_date: string;
}

export class CustomItem {
  constructor(
    public title: string = '',
    public description: string = '',
    public img_link: string = '',
    public video_link: string = '',
    public creation_date: string = '',
  ) {}
}
