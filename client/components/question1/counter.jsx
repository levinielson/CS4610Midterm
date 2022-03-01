import { useState, useEffect } from "react";

export const Counter = ({ min, max }) => {
  const [number, setNumber] = useState(0);
  const [error, setError] = useState('');
  buttonCss = "bg-gray-600 pt-2 pb-2 pr-4 pl-4 rounded-lg font-bold text-white";
  
  useEffect(async () => {
    if (min > 0) {
      setNumber(min);
    }
    if (max < 0) {
      setNumber(max);
    }
  }, [])

  const increment = () => {
    setError('');

    if (number < max) {
      setNumber(number + 1);
    }
    else {
      setError(`The max number for this counter is ${max}`);
    }
  }

  const decrement = () => {
    setError('');
    if (number > min) {
      setNumber(number - 1);
    }
    else {
      setError(`The min number for this counter is ${min}`);
    }
  }

  return (
    <div>
      <div>{number}</div>
      <button className={buttonCss} onClick={() => decrement()}>-</button>
      <button className={buttonCss} onClick={() => increment()}>+</button>
      <div className="text-red-500">{error}</div>
    </div>
  )
}