export type Model = 'modelo1' | 'modelo2' | 'modelo3'

export default interface IThought{

  id: string;
  message: string;
  author: string;
  model: Model;

}
