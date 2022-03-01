import { Counter } from "./counter";

export const Question1 = () => {
  return (
    <>
      <div>Render your counters here!</div>
      <Counter min={-5} max={5}/>
      <Counter min={-15} max={-5}/>
      <Counter min={5} max={15}/>
    </>
  )
};
