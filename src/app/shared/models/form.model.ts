export interface IFormShape {
  [index: string]: string;
}

export interface IFormElem {
  title: string;
  name: string;
  type?: string;
}

export interface IFormName {
  formName: string;
  submitName: string;
}
