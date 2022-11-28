export type State = Array<Person>

export type Action = {
  type: "ADD";
  payload: {
    name: string;
    age: number;
  }
} | {
  type: "REMOVE";
  payload: {
    index: number;
  }
};

export interface Person {
    name: string;
    age: number;
  }