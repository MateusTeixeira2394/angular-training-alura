export type Model = 'modelo1' | 'modelo2' | 'modelo3'

export default interface IThought{

  id?: number;
  message: string;
  author: string;
  model: Model;
  favorite: boolean;
}
