'use client'
import { useImmerReducer } from "use-immer";
import { Button } from "../components/Button";
import { State, Action } from './types'
import { FormEvent, useState } from 'react'
const initValue = {
  name: "John",
  age: 20,
}

const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...draft, action.payload];
    case "REMOVE":
      return draft.filter((_, index) => index !== action.payload.index);
    default:
      return draft;
  }
};


export default function Home() {

  const [state, dispatch] = useImmerReducer<State, Action>(reducer, [initValue]);

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    (name && age)?
    dispatch({
      type: "ADD",
      payload: {
        name: name,
        age: age
      }
    }): alert("Please fill all the fields")
  
    setName("");

  };

  const handleRemove = (index: number) => {
    dispatch({
      type: "REMOVE",
      payload: {
        index
      }
    });
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);


  return (
    <div className="text-neutral-300 inline-block p-4">
      <button className="bg-tomato-3 text-tomato-11">Buttonsd</button>
      <form onSubmit={(e) => handleAdd(e)}>
        <input className="border w-full min-w-0 bg-black px-2 py-1" type='number' onChange={(e) => setAge(parseInt(e.target.value))} />
        <input className="border w-full min-w-0 bg-black px-2 py-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <Button type='submit' >ADD</Button>
      </form>
      <Button size='small' onClick={() => handleRemove(0)}>Remove</Button>
      <div>
        {state.map((value, index) => (
          <div key={index}>
            <p>{value.name}</p>
            <p>{value.age}</p>

          </div>
        ))}


      </div>
    </div>
  )
}
